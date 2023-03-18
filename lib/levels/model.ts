/**
 * Model in which the levels
 * must inherit from
 * 
 * @since 18/03/2023
 * @author Felipe Matheus Flohr
 */
export default class LogLevelModel {
    public readonly displayName: string;
    public readonly displayColor: string;

    public constructor(displayName: string, displayColor: string) {
        this.displayName = displayName;
        this.displayColor = displayColor;
    }
}