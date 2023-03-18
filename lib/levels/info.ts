import LogLevelModel from "./model";

/**
 * The info level for
 * logging.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export default class InfoLevel extends LogLevelModel {
    public constructor() {
        super("INFO", "\x1b[37m");
    }
}