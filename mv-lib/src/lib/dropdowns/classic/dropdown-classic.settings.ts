export class MvLibDropdownClassicSettings {
    
    public placeholder: string;
    public closeOnSelect: boolean;
    public closeOnOutsideClick: boolean;

    constructor(settings: Partial<MvLibDropdownClassicSettings> = {}) {
        this.placeholder = settings.placeholder ?? 'Select an item';
        this.closeOnSelect = settings.closeOnSelect ?? true;
        this.closeOnOutsideClick = settings.closeOnOutsideClick ?? true;
    }
}