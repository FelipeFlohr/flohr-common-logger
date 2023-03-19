import MessageGeneratorImpl from "../../properties/message_generator/impl/message_generator_impl";
import Logger from "../logger";
import LogLevel, { logLevelImpl } from "../../levels/level";
import FileWriter from "../../properties/file_writer/file_writer";
import IMessagePrinter from "../../properties/message_printer/message_printer";
import { Injectable } from "@felipeflohr/flohr-common-injection";
import { Queue } from "@felipeflohr/flohr-common-utils";

/**
 * Implementation of the logger.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
@Injectable()
export default class LoggerImpl extends Logger {
    private readonly queue: Queue<string, void>;

    public constructor(messagePrinter?: IMessagePrinter, fileWriter?: FileWriter) {
        super(
            new MessageGeneratorImpl(),
            logLevelImpl,
            messagePrinter,
            fileWriter,
        );

        this.queue = this.generateQueue();
        this.queue.start();
    }

    public override log(msg: unknown, level: keyof LogLevel = "info"): void {
        this.debug(msg, level);

        if (this.fileWriter) {
            const message = this.getMessage(msg, level);
            this.queue.add(message);
        }
    }

    public override fatal(msg: unknown): void {
        this.log(msg, "fatal");
    }

    public override error(msg: unknown): void {
        this.log(msg, "error");
    }

    public override warn(msg: unknown): void {
        this.log(msg, "warn");
    }

    public override info(msg: unknown): void {
        this.log(msg, "info");
    }

    public override okay(msg: unknown): void {
        this.log(msg, "okay");
    }

    public override debug(msg: unknown, level: keyof LogLevel = "info"): void {
        if (this.messagePrinter) {
            const coloredMessage = this.messageGenerator.getColoredMessage(this.levelsImpl[level], `${msg}`);

            if (coloredMessage) {
                this.messagePrinter.print(coloredMessage, this.levelsImpl[level]);
            } else {
                const message = this.getMessage(msg, level);
                this.messagePrinter.print(message, this.levelsImpl[level]);
            }
        }
    }

    public override getMessage(msg: unknown, level: keyof LogLevel = "info"): string {
        return this.messageGenerator.getMessage(this.levelsImpl[level], `${msg}`);
    }

    private generateQueue(): Queue<string, void> {
        const writeMessage = async (msg: string) => {
            await this.fileWriter?.writeToDefaultFile(msg);
        };

        const queue = new Queue<string, void>(writeMessage, 1, true);
        return queue;
    }
}
