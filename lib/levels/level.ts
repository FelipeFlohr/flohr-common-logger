import ErrorLevel from "./error";
import FatalLevel from "./fatal";
import InfoLevel from "./info";
import LogLevelModel from "./model";
import OkayLevel from "./okay";
import WarnLevel from "./warn";

/**
 * Type containing the levels
 * available for logging.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
type LogLevel = {
    readonly fatal: LogLevelModel
    readonly error: LogLevelModel
    readonly warn: LogLevelModel
    readonly info: LogLevelModel
    readonly okay: LogLevelModel
}

/**
 * The implementation for the
 * levels available
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export const logLevelImpl: LogLevel = {
    fatal: new FatalLevel(),
    error: new ErrorLevel(),
    warn: new WarnLevel(),
    info: new InfoLevel(),
    okay: new OkayLevel(),
};

export default LogLevel;