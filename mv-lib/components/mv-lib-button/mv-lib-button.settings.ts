export type MvLibOnClickEffect = 'none' | 'push' | 'ripple';

export class MvLibButtonSettings {
    public widthPx: number | undefined;
    public heightPx: number | undefined;

    public backgroundColor: string;
    public hoverBackgroundColor: string;
    public textColor: string;
    public border: string;

    public onClickEffect: MvLibOnClickEffect;

    constructor(settings: Partial<MvLibButtonSettings> = {}) {
        this.widthPx = settings.widthPx ?? undefined;
        this.heightPx = settings.heightPx ?? undefined;

        this.backgroundColor = settings.backgroundColor ?? 'gray';
        this.hoverBackgroundColor = settings.hoverBackgroundColor ?? 'dimgray';
        this.textColor = settings.textColor ?? 'white';
        this.border = settings.border ?? 'none';

        this.onClickEffect = settings.onClickEffect ?? 'none';
    }
}