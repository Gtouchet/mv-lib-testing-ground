export type MvLibSettingsOnClickEffect = '';

export class MvLibSwitchSettings {
    
    public widthPx: number;
    public heightPx: number;
    public offColor: string;
    public onColor: string;
    public sliderOffColor: string;
    public sliderOnColor: string;
    public border: string;
    public onClickEffects: MvLibSettingsOnClickEffect[];

    constructor(settings: Partial<MvLibSwitchSettings> = {}) {
        this.widthPx = settings.widthPx ?? 50;
        this.heightPx = settings.heightPx ?? this.widthPx / 2;
        this.offColor = settings.offColor ?? 'gray';
        this.onColor = settings.onColor ?? 'green';
        this.sliderOffColor = settings.sliderOffColor ?? 'darkgray';
        this.sliderOnColor = settings.sliderOnColor ?? 'white';
        this.border = settings.border ?? 'none';
        this.onClickEffects = settings.onClickEffects ?? [];
    }
}