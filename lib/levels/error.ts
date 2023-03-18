import LogLevelModel from "./model";

/**
 * The error level for
 * logging.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export default class ErrorLevel extends LogLevelModel {
    public constructor() {
        super("ERROR", "\x1b[91m");
    }
}