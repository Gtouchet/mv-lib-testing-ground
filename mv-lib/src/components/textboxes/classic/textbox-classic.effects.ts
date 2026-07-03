export type MvLibTextboxClassicHoverEffect = 'darken';
export type MvLibTextboxClassicSelectedEffect = 'outline';

export class MvLibTextboxClassicEffects {
    
    public hover: MvLibTextboxClassicHoverEffect[];
    public selected: MvLibTextboxClassicSelectedEffect[];

    constructor(settings: Partial<MvLibTextboxClassicEffects> = {}) {
        this.hover = settings.hover ?? [];
        this.selected = settings.selected ?? [];
    }
}