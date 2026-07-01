export class MvLibDropdownClassicSettings {
    
    public closeOnSelect: boolean;
    public closeOnOutsideClick: boolean;

    constructor(settings: Partial<MvLibDropdownClassicSettings> = {}) {
        this.closeOnSelect = settings.closeOnSelect ?? true;
        this.closeOnOutsideClick = settings.closeOnOutsideClick ?? true;
    }
}