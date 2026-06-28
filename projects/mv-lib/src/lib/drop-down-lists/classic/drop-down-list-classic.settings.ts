export class MvLibDropDownListClassicSettings {
    
    public widthPx: number | undefined;
    public heightPx: number | undefined;
    public backgroundColor: string;
    public textColor: string;
    public placeHolder: string;

    constructor(settings: Partial<MvLibDropDownListClassicSettings> = {}) {
        this.widthPx = settings.widthPx ?? undefined;
        this.heightPx = settings.heightPx ?? undefined;
        this.backgroundColor = settings.backgroundColor ?? 'gray';
        this.textColor = settings.textColor ?? 'white';
        this.placeHolder = settings.placeHolder ?? 'Select an item';
    }
}