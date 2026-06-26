export class MvLibButtonSettings {
    
    public widthPx: number | undefined;
    public heightPx: number | undefined;
    public backgroundColor: string;
    public textColor: string;

    constructor(settings: Partial<MvLibButtonSettings> = {}) {
        this.widthPx = settings.widthPx ?? undefined;
        this.heightPx = settings.heightPx ?? undefined;
        this.backgroundColor = settings.backgroundColor ?? 'gray';
        this.textColor = settings.textColor ?? 'white';
    }
}