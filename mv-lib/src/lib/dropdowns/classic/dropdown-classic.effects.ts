export type MvLibDropdownClassicIdleEffect = 'shadow';
export type MvLibDropdownClassicButtonHoverEffect = 'darken';
export type MvLibDropdownClassicItemHoverEffect = 'darken';
export type MvLibDropdownClassicButtonClickEffect = 'push' | 'ripple';

export class MvLibDropdownClassicEffects {

    public idle: MvLibDropdownClassicIdleEffect[];
    public buttonHover: MvLibDropdownClassicButtonHoverEffect[];
    public itemHover: MvLibDropdownClassicItemHoverEffect[];
    public buttonClick: MvLibDropdownClassicButtonClickEffect[];

    constructor(settings: Partial<MvLibDropdownClassicEffects> = {}) {
        this.idle = settings.idle ?? [];
        this.buttonHover = settings.buttonHover ?? [];
        this.itemHover = settings.itemHover ?? [];
        this.buttonClick = settings.buttonClick ?? [];
    }
}