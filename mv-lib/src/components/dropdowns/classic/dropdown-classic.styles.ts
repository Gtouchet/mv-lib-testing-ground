export class MvLibDropdownClassicStyles {
    
    public widthPx: number | undefined;
    public buttonHeightPx: number | undefined;
    public buttonColor: string;
    public buttonTextColor: string;
    public listMaxHeightPx: number | undefined;
    public itemHeightPx: number | undefined;
    public itemColor: string;
    public itemTextColor: string;

    constructor(settings: Partial<MvLibDropdownClassicStyles> = {}) {
        this.widthPx = settings.widthPx ?? undefined;
        this.buttonHeightPx = settings.buttonHeightPx ?? undefined;
        this.itemHeightPx = settings.itemHeightPx ?? undefined;
        this.listMaxHeightPx = settings.listMaxHeightPx ?? 150;
        this.buttonColor = settings.buttonColor ?? 'gray';
        this.buttonTextColor = settings.buttonTextColor ?? 'white';
        this.itemColor = settings.itemColor ?? 'darkgray';
        this.itemTextColor = settings.itemTextColor ?? 'white';
    }
}