import NotDirectoryPathError from "../errors/not_directory_path";
import NotTextFileError from "../errors/not_text_file";
import FileWriter from "../file_writer";
import FileWriterProperties from "./file_writer_properties";
import fs, { WriteStream } from "fs";
import fsPromise from "fs/promises";
import path from "path";

/**
 * Implementation of the
 * File Writer for Node.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export default class NodeFileWriter implements FileWriter {
    private readonly properties: FileWriterProperties;
    private readonly writerDate: Date;
    private readonly writeStream: WriteStream;

    /**
     * Constructor for the Node
     * File Writer.
     * @param properties Properties
     * of the instance.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    public constructor(properties: FileWriterProperties) {
        this.properties = properties;
        if (!this.isDirectoryPath()) {
            throw new NotDirectoryPathError(properties.folderToSaveLogFile);
        }
        this.writerDate = new Date();
        this.writeStream = fs.createWriteStream(this.getFilePath());
    }

    public async writeToDefaultFile(message: string): Promise<void> {
        const messageTrimmed = message.trim();
        const messageEndsWithBreakline = messageTrimmed.endsWith("\n");
        const messageParsed = messageEndsWithBreakline ? messageTrimmed : `${messageTrimmed}\n`;

        await this.promisifiedWriteToStream(messageParsed);
    }

    public async writeToNewFile(message: string, filePath: string): Promise<void> {
        if (!NodeFileWriter.isTextFilePath(filePath)) {
            throw new NotTextFileError(filePath);
        }

        const messageTrimmed = message.trim();
        const messageEndsWithBreakline = messageTrimmed.endsWith("\n");
        const messageParsed = messageEndsWithBreakline ? messageTrimmed : `${messageTrimmed}\n`;

        await fsPromise.writeFile(filePath, messageParsed);
    }

    /**
     * Generates the full path
     * in which the log file will
     * be saved.
     * @returns File path. 
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    private getFilePath(): string {
        const day = this.writerDate.getDate() < 10 ? `0${this.writerDate.getDate()}` : this.writerDate.getDate().toString();
        const month = this.writerDate.getMonth() + 1 < 10 ? `0${this.writerDate.getMonth() + 1}` : `${this.writerDate.getMonth() + 1}`;

        const filePath = `log-${this.writerDate.getFullYear()}${month}${day}.txt`;
        const fullPath = path.resolve(this.properties.folderToSaveLogFile, filePath);
        return fullPath;
    }

    /**
     * Promisifies the "write-to-stream"
     * callback process.
     * @param content Content to write.
     * @returns Empty promise.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    private promisifiedWriteToStream(content: string): Promise<void> {
        return new Promise<void>((res, rej) => {
            this.writeStream.write(content, (err) => {
                if (err) {
                    rej(err);
                } else {
                    res();
                }
            });
        });
    }

    /**
     * Checks if the path
     * provided in the properties
     * is a valid directory path.
     * @returns True if path is a
     * directory.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    private isDirectoryPath(): boolean {
        const res = fs.lstatSync(this.properties.folderToSaveLogFile)
            .isDirectory();
        return res;
    }

    /**
     * Checks if the path
     * provided in the method
     * is a valid text file path.
     * @param filePath Path to check.
     * @returns True if path is a
     * text file.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    private static isTextFilePath(filePath: string): boolean {
        const resolvedPath = path.resolve(filePath);
        const res = path.extname(resolvedPath);
        return res.endsWith("txt");
    }
}