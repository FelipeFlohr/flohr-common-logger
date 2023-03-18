import LogLevelModel from "../../../levels/model";
import MessageGenerator from "../message_generator";

/**
 * Message generator implementation
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export default class MessageGeneratorImpl implements MessageGenerator {
    private static readonly RESET = "\x1b[0m";

    public getMessage(level: LogLevelModel, msg: string): string {
        const message = MessageGeneratorImpl.generateMessage(level, msg);
        return `${message.level} | ${message.timestamp} | ${message.msg}`;
    }

    public getColoredMessage(level: LogLevelModel, msg: string): string {
        const message = MessageGeneratorImpl.generateMessage(level, msg);
        const levelColored = MessageGeneratorImpl.getLevelColored(level);

        return `${levelColored} | ${message.timestamp} | ${message.msg}`;
    }

    private static generateMessage(level: LogLevelModel, msg: string): GeneratedMessage {
        const date = new Date();

        const year = date.getFullYear().toString();
        const month = MessageGeneratorImpl.parseIntegerToString(date.getMonth() + 1);
        const day = MessageGeneratorImpl.parseIntegerToString(date.getDate());

        const hour = MessageGeneratorImpl.parseIntegerToString(date.getHours());
        const minutes = MessageGeneratorImpl.parseIntegerToString(date.getMinutes());
        const seconds = MessageGeneratorImpl.parseIntegerToString(date.getSeconds());

        const trimmedMessage = msg.trim();

        const levelStr = level.displayName;
        const timestampStr = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
        const messageStr = trimmedMessage.endsWith(".") ? trimmedMessage : `${trimmedMessage}`;

        return {
            level: levelStr,
            msg: messageStr,
            timestamp: timestampStr
        };
    }

    private static getLevelColored(level: LogLevelModel): string {
        const res = `${level.displayColor}${level.displayName}${MessageGeneratorImpl.RESET}`;
        return res;
    }

    private static parseIntegerToString(val: number): string {
        return val < 10 ? `0${val}` : val.toString();
    }
}

type GeneratedMessage = {
    readonly level: string
    readonly timestamp: string
    readonly msg: string
}