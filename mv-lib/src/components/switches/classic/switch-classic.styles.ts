export class MvLibSwitchClassicStyles {
    
    public widthPx: number;
    public heightPx: number;
    public offColor: string;
    public onColor: string;
    public sliderOffColor: string;
    public sliderOnColor: string;
    public sliderOffIcon: string | undefined;
    public sliderOnIcon: string | undefined;
    public sliderOffIconColor: string;
    public sliderOnIconColor: string;

    constructor(settings: Partial<MvLibSwitchClassicStyles> = {}) {
        this.widthPx = settings.widthPx ?? 64;
        this.heightPx = settings.heightPx ?? this.widthPx / 2;
        this.offColor = settings.offColor ?? 'gray';
        this.onColor = settings.onColor ?? 'green';
        this.sliderOffColor = settings.sliderOffColor ?? 'darkgray';
        this.sliderOnColor = settings.sliderOnColor ?? 'white';
        this.sliderOffIcon = settings.sliderOffIcon ?? undefined;
        this.sliderOnIcon = settings.sliderOnIcon ?? undefined;
        this.sliderOffIconColor = settings.sliderOffIconColor ?? 'black';
        this.sliderOnIconColor = settings.sliderOnIconColor ?? 'black';
    }
}