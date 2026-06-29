export class MvLibDropdownClassicSettings {
    
    public widthPx: number | undefined;
    public buttonHeightPx: number | undefined;
    public itemHeightPx: number | undefined;
    public buttonColor: string;
    public buttonTextColor: string;
    public listColor: string;
    public listTextColor: string;
    public placeholder: string;
    public autoCloseAfterSelect: boolean;

    constructor(settings: Partial<MvLibDropdownClassicSettings> = {}) {
        this.widthPx = settings.widthPx ?? undefined;
        this.buttonHeightPx = settings.buttonHeightPx ?? undefined;
        this.itemHeightPx = settings.itemHeightPx ?? undefined;
        this.buttonColor = settings.buttonColor ?? 'gray';
        this.buttonTextColor = settings.buttonTextColor ?? 'white';
        this.listColor = settings.listColor ?? 'darkgray';
        this.listTextColor = settings.listTextColor ?? 'white';
        this.placeholder = settings.placeholder ?? 'Select an item';
        this.autoCloseAfterSelect = settings.autoCloseAfterSelect ?? true;
    }
}