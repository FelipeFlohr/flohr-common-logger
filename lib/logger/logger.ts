import LogLevel from "../levels/level";
import FileWriter from "../properties/file_writer/file_writer";
import MessageGenerator from "../properties/message_generator/message_generator";
import IMessagePrinter from "../properties/message_printer/message_printer";

/**
 * Logger abstraction.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export default abstract class Logger {
    /**
     * Entity used for message generation.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    protected readonly messageGenerator: MessageGenerator;
    /**
     * Entity used for printing the message
     * (through console.log, stdout, etc).
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    protected readonly messagePrinter?: IMessagePrinter;
    /**
     * Entity used for writing the log file.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    protected readonly fileWriter?: FileWriter;
    /**
     * Implementation of the "Log Level".
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    protected readonly levelsImpl: LogLevel;

    /**
     * Constructor for the logger.
     * @param messageGenerator Entity used for
     * message generation.
     * @param messagePrinter Entity used for
     * printing messages on console. If no value
     * is provided, then no message will be
     * printed. 
     * @param fileWriter Entity used for writing
     * the log file. If no value is provided, then
     * no file will be written.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    protected constructor(messageGenerator: MessageGenerator, levelsImpl: LogLevel, messagePrinter?: IMessagePrinter, fileWriter?: FileWriter) {
        this.messageGenerator = messageGenerator;
        this.levelsImpl = levelsImpl;
        this.messagePrinter = messagePrinter;
        this.fileWriter = fileWriter;
    }

    /**
     * Log a message.
     * @param msg Message to log.
     * @param level Level of the log.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    public abstract log(msg: unknown, level?: keyof LogLevel): void;
    /**
     * Log a message in "fatal" level.
     * @param msg Message to log.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    public abstract fatal(msg: unknown): void;
    /**
     * Log a message in "error" level.
     * @param msg Message to log.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    public abstract error(msg: unknown): void;
    /**
     * Log a message in "warn" level.
     * @param msg Message to log.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    public abstract warn(msg: unknown): void;
    /**
     * Log a message in "info" level.
     * @param msg Message to log.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    public abstract info(msg: unknown): void;
    /**
     * Log a message in "okay" level.
     * @param msg Message to log.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    public abstract okay(msg: unknown): void;
    /**
     * Log a message without writing
     * to the file. If no "Message
     * Printer" is provided, then no
     * message will be logged.
     * @param msg Message to log.
     * @param level Level to log.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    public abstract debug(msg: unknown, level?: keyof LogLevel): void;
    /**
     * Returns the message from the
     * message generator.
     * @param msg Message to generate.
     * @param level Level of the message.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    public abstract getMessage(msg: unknown, level: keyof LogLevel): string;
}