import LogLevelModel from "../../levels/model";

/**
 * Message printer abstraction.
 * Responsible for printing the
 * message to the console.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
interface IMessagePrinter {
    /**
     * Prints the message.
     * @param msg Message.
     * @param level Level
     * of the message.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    print(msg: string, level?: LogLevelModel): void;
}

export default IMessagePrinter;