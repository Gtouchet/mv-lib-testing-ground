export type MvLibDropdownClassicIdleEffect = 'shadow';
export type MvLibDropdownClassicHoverEffect = 'darken';
export type MvLibDropdownClassicClickEffect = 'push' | 'ripple';

export class MvLibDropdownClassicEffects {

    public idle: MvLibDropdownClassicIdleEffect[];
    public hover: MvLibDropdownClassicHoverEffect[];
    public click: MvLibDropdownClassicClickEffect[];

    constructor(settings: Partial<MvLibDropdownClassicEffects> = {}) {
        this.idle = settings.idle ?? [];
        this.hover = settings.hover ?? [];
        this.click = settings.click ?? [];
    }
}