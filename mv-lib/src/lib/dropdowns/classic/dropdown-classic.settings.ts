export class MvLibDropdownClassicSettings {
    
    public closeOnSelect: boolean;
    public closeOnOutsideClick: boolean;
    public resetButton: boolean;

    constructor(settings: Partial<MvLibDropdownClassicSettings> = {}) {
        this.closeOnSelect = settings.closeOnSelect ?? true;
        this.closeOnOutsideClick = settings.closeOnOutsideClick ?? true;
        this.resetButton = settings.resetButton ?? false;
    }
}