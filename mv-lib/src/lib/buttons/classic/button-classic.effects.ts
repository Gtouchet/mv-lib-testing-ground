export type MvLibButtonClassicIdleEffect = 'shadow';
export type MvLibButtonClassicHoverEffect = 'darken';
export type MvLibButtonClassicClickEffect = 'push' | 'ripple';

export class MvLibButtonClassicEffects {
    
    public idle: MvLibButtonClassicIdleEffect[];
    public hover: MvLibButtonClassicHoverEffect[];
    public click: MvLibButtonClassicClickEffect[];

    constructor(settings: Partial<MvLibButtonClassicEffects> = {}) {
        this.idle = settings.idle ?? [];
        this.hover = settings.hover ?? ['darken'];
        this.click = settings.click ?? ['push'];
    }
}