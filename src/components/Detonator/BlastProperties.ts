export class BlastProperties {
    Id: number;
    Width: number;
    Height: number;
    Left: number;
    Top: number;
    Duration: number;

    constructor(id: number, width: number, height: number, left: number, top: number, duration: number) {
        this.Id = id;
        this.Width = width;
        this.Height = height;
        this.Left = left;
        this.Top = top;
        this.Duration = duration;
    }
}