export class MvLibButtonClassicSettings {
    
    public widthPx: number | undefined;
    public heightPx: number | undefined;
    public backgroundColor: string;
    public textColor: string;

    constructor(settings: Partial<MvLibButtonClassicSettings> = {}) {
        this.widthPx = settings.widthPx ?? undefined;
        this.heightPx = settings.heightPx ?? undefined;
        this.backgroundColor = settings.backgroundColor ?? 'gray';
        this.textColor = settings.textColor ?? 'white';
    }
}