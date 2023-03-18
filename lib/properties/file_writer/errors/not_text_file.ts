/**
 * Error thrown when the path
 * is not a text file path.
 *
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export default class NotTextFileError extends Error {
    /**
     * Constructor of the class.
     * @param path Path that originated
     * the error.
     * 
     * @since 18/03/2023
     * @author Felipe Matheus Flohr
     */
    public constructor(path: string) {
        super(`Path ${path} is not a .txt file.`);
    }
}