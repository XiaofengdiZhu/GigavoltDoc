export default class IOPort {
    Start: number;
    End: number;
    Function: string;
    Description: string;

    constructor(start: number, end: number, func: string, description: string) {
        if (start < 1 || start > 32) {
            throw new Error("Invalid Start");
        }
        if (end < 1 || end < start || end > 32) {
            throw new Error("Invalid End");
        }
        this.Start = start;
        this.End = end;
        this.Function = func;
        this.Description = description;
    }

    Length() {
        return this.End - this.Start + 1;
    }
}