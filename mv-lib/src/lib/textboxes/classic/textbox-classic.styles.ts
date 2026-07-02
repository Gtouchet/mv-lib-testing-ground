export class MvLibTextboxClassicStyles {
    
    public widthPx: number | undefined;
    public heightPx: number | undefined;
    public color: string;
    public textColor: string;

    constructor(settings: Partial<MvLibTextboxClassicStyles> = {}) {
        this.widthPx = settings.widthPx ?? undefined;
        this.heightPx = settings.heightPx ?? undefined;
        this.color = settings.color ?? 'gray';
        this.textColor = settings.textColor ?? 'white';
    }
}