import LogLevelModel from "./model";

/**
 * The okay level for
 * logging.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export default class OkayLevel extends LogLevelModel {
    public constructor() {
        super("OKAY", "\x1b[32m");
    }
}