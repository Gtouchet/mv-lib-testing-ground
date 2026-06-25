export type MvLibSettingsOnClickEffect = 'push' | 'ripple';

export class MvLibButtonSettings {
    public widthPx: number | undefined;
    public heightPx: number | undefined;
    public backgroundColor: string;
    public backgroundColorHover: string;
    public textColor: string;
    public border: string;
    public onClickEffects: MvLibSettingsOnClickEffect[];

    constructor(settings: Partial<MvLibButtonSettings> = {}) {
        this.widthPx = settings.widthPx ?? undefined;
        this.heightPx = settings.heightPx ?? 32;
        this.backgroundColor = settings.backgroundColor ?? 'gray';
        this.backgroundColorHover = settings.backgroundColorHover ?? 'dimgray';
        this.textColor = settings.textColor ?? 'white';
        this.border = settings.border ?? 'none';
        this.onClickEffects = settings.onClickEffects ?? [];
    }
}