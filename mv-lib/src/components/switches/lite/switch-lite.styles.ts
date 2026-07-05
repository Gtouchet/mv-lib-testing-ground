export class MvLibSwitchLiteStyles {
    
    public widthPx: number;
    public heightPx: number;
    public offColor: string;
    public onColor: string;
    public sliderSizePx: number;
    public sliderOffColor: string;
    public sliderOnColor: string;
    public sliderOffIcon: string | undefined;
    public sliderOnIcon: string | undefined;
    public sliderOffIconColor: string;
    public sliderOnIconColor: string;

    constructor(settings: Partial<MvLibSwitchLiteStyles> = {}) {
        this.widthPx = settings.widthPx ?? 48;
        this.heightPx = settings.heightPx ?? this.widthPx / 4;
        this.offColor = settings.offColor ?? 'gray';
        this.onColor = settings.onColor ?? 'white';
        this.sliderSizePx = settings.sliderSizePx ?? this.heightPx * 2;
        this.sliderOffColor = settings.sliderOffColor ?? 'darkgray';
        this.sliderOnColor = settings.sliderOnColor ?? 'white';
        this.sliderOffIcon = settings.sliderOffIcon ?? undefined;
        this.sliderOnIcon = settings.sliderOnIcon ?? undefined;
        this.sliderOffIconColor = settings.sliderOffIconColor ?? 'black';
        this.sliderOnIconColor = settings.sliderOnIconColor ?? 'black';
    }
}