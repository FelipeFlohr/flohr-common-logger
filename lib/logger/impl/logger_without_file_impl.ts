import LoggerImpl from "./logger_impl";

/**
 * Implementation of the logger
 * file without the File Writer
 * definition.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export default class LoggerWithoutFileImpl extends LoggerImpl {
    public constructor() {
        super(undefined);
    }
}