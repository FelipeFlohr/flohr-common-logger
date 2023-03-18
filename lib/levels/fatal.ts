import LogLevelModel from "./model";

/**
 * The fatal level for
 * logging.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export default class FatalLevel extends LogLevelModel {
    public constructor() {
        super("FATAL", "\x1b[31m");
    }
}