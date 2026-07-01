export class MvLibButtonClassicStyles {
    
    public widthPx: number | undefined;
    public heightPx: number | undefined;
    public color: string;
    public textColor: string;

    constructor(settings: Partial<MvLibButtonClassicStyles> = {}) {
        this.widthPx = settings.widthPx ?? undefined;
        this.heightPx = settings.heightPx ?? undefined;
        this.color = settings.color ?? 'gray';
        this.textColor = settings.textColor ?? 'white';
    }
}