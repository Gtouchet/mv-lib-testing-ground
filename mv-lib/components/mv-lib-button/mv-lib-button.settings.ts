export type MvLibButtonType = 'primary' | 'secondary';
export type MvLibOnClickEffect = 'none' | 'ripple';

export class MvLibButtonSettings {
    public widthPx: number | undefined;
    public heightPx: number | undefined;

    public type: MvLibButtonType;

    public backgroundColor: string;
    public hoverBackgroundColor: string;
    public textColor: string ;
    public border: string;

    public onClickEffect: MvLibOnClickEffect;

    public disabled: boolean;

    constructor(settings: Partial<MvLibButtonSettings> = {}) {
        this.widthPx = settings.widthPx ?? undefined;
        this.heightPx = settings.heightPx ?? undefined;

        this.type = settings.type ?? 'primary';

        this.backgroundColor = 
            settings.backgroundColor ?? `var(--button-${settings.type}-color)`;
        this.hoverBackgroundColor = settings.disabled ? this.backgroundColor :
            settings.hoverBackgroundColor ?? `var(--button-${settings.type}-hover-color)`;
        this.textColor = settings.textColor ?? 'white';
        this.border = settings.border ?? 'none';

        this.onClickEffect = settings.onClickEffect ?? 'none';

        this.disabled = settings.disabled ?? false;
    }
}