export type MvLibSwitchClassicIdleEffect = 'shadow';
export type MvLibSwitchClassicHoverEffect = '';
export type MvLibSwitchClassicClickEffect = '';

export class MvLibSwitchClassicEffects {
    
    public idle: MvLibSwitchClassicIdleEffect[];
    public hover: MvLibSwitchClassicHoverEffect[];
    public click: MvLibSwitchClassicClickEffect[];

    constructor(settings: Partial<MvLibSwitchClassicEffects> = {}) {
        this.idle = settings.idle ?? [];
        this.hover = settings.hover ?? [];
        this.click = settings.click ?? [];
    }
}