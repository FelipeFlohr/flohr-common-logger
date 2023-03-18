/**
 * File writer abstraction.
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
interface FileWriter {
    /**
     * Appends a message to the
     * default log file.
     * @param message Message to append
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    writeToDefaultFile(message: string): Promise<void>
    /**
     * Writes a message to a
     * new file.
     * @param message Message to append.
     * @param filePath File to be created.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    writeToNewFile(message: string, filePath: string): Promise<void>
}

export default FileWriter;