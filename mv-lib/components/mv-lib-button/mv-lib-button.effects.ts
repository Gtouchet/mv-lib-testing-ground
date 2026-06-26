export type MvLibButtonIdleEffect = 'shadow';
export type MvLibButtonHoverEffect = 'darken';
export type MvLibButtonClickEffect = 'push' | 'ripple';

export class MvLibButtonEffects {
    
    public idle: MvLibButtonIdleEffect[];
    public hover: MvLibButtonHoverEffect[];
    public click: MvLibButtonClickEffect[];

    constructor(settings: Partial<MvLibButtonEffects> = {}) {
        this.idle = settings.idle ?? [];
        this.hover = settings.hover ?? [];
        this.click = settings.click ?? [];
    }
}