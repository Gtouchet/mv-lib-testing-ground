export type MvLibTextboxClassicIdleEffect = 'shadow';
export type MvLibTextboxClassicHoverEffect = 'darken';

export class MvLibTextboxClassicEffects {
    
    public idle: MvLibTextboxClassicIdleEffect[];
    public hover: MvLibTextboxClassicHoverEffect[];

    constructor(settings: Partial<MvLibTextboxClassicEffects> = {}) {
        this.idle = settings.idle ?? [];
        this.hover = settings.hover ?? [];
    }
}