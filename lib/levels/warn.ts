import LogLevelModel from "./model";

/**
 * The warn level for
 * logging.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export default class WarnLevel extends LogLevelModel {
    public constructor() {
        super("WARN", "\x1b[33m");
    }
}