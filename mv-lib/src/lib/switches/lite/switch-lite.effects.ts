export type MvLibSwitchLiteIdleEffect = 'shadow';
export type MvLibSwitchLiteHoverEffect = 'enlarge-slider';
export type MvLibSwitchLiteClickEffect = 'push' | 'ripple';

export class MvLibSwitchLiteEffects {
    
    public idle: MvLibSwitchLiteIdleEffect[];
    public hover: MvLibSwitchLiteHoverEffect[];
    public click: MvLibSwitchLiteClickEffect[];

    constructor(settings: Partial<MvLibSwitchLiteEffects> = {}) {
        this.idle = settings.idle ?? [];
        this.hover = settings.hover ?? [];
        this.click = settings.click ?? [];
    }
}