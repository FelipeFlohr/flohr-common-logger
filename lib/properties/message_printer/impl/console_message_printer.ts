import ErrorLevel from "../../../levels/error";
import FatalLevel from "../../../levels/fatal";
import LogLevelModel from "../../../levels/model";
import WarnLevel from "../../../levels/warn";
import IMessagePrinter from "../message_printer";

export default class ConsoleMessagePrinter implements IMessagePrinter {
    print(msg: string, level?: LogLevelModel): void {
        if (level instanceof FatalLevel || level instanceof ErrorLevel) {
            console.error(msg);
        } else if (level instanceof WarnLevel) {
            console.warn(msg);
        } else {
            console.log(msg);
        }
    }
}