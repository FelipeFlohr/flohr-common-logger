import LogLevelModel from "../../levels/model";

/**
 * Message generator abstraction.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
interface MessageGenerator {
    /**
     * Generates the message to be logged.
     * @param level Level of the message.
     * @param msg Message.
     * @returns Generated message.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    getMessage(level: LogLevelModel, msg: string): string;
    /**
     * Generates a colored message to be
     * logged.
     * @param level Level of the message. 
     * @param msg Message.
     * @returns Colored message if it is
     * possible to generate a colored
     * message. Else returns undefined.
     * @see https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    getColoredMessage(level: LogLevelModel, msg: string): string | undefined;
}

export default MessageGenerator;