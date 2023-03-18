import NodeFileWriter from "../../properties/file_writer/impl/node_file_writer";
import ConsoleMessagePrinter from "../../properties/message_printer/impl/console_message_printer";
import LoggerImpl from "./logger_impl";

/**
 * Implementation of the logger
 * file with the File Writer
 * definition.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export default class LoggerWithFileImpl extends LoggerImpl {
    public constructor(folderPathToSaveLog: string) {
        super(new ConsoleMessagePrinter(), new NodeFileWriter({ folderToSaveLogFile: folderPathToSaveLog }));
    }
}