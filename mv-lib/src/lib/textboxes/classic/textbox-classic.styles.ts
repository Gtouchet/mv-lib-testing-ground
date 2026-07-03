export class MvLibTextboxClassicStyles {
    
    public widthPx: number | undefined;
    public heightPx: number | undefined;
    public backgroundColor: string;
    public textColor: string;
    public borderColor: string;
    public selectedOutlineColor: string;

    constructor(settings: Partial<MvLibTextboxClassicStyles> = {}) {
        this.widthPx = settings.widthPx ?? undefined;
        this.heightPx = settings.heightPx ?? undefined;
        this.backgroundColor = settings.backgroundColor ?? 'gray';
        this.textColor = settings.textColor ?? 'white';
        this.borderColor = settings.borderColor ?? 'black';
        this.selectedOutlineColor = settings.selectedOutlineColor ?? 'black';
    }
}