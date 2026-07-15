import { Directive, OnInit, signal } from "@angular/core";
import { UntypedFormGroup, ValidatorFn, Validators } from "@angular/forms";

@Directive({
    standalone: true,
})
export abstract class BaseExampleComponent<
    Styles,
    Effects extends { [K in keyof Effects]: unknown[] },
    Settings
> implements OnInit {

    ngOnInit() {
        this.initForm();
        this.refreshLog();
    }

    /**
     * Styles, Effects, Settings
     */
    protected styles = signal<Partial<Styles>>({});
    protected effects = signal<Partial<Effects>>({});
    protected settings = signal<Partial<Settings>>({});

    protected disabled = signal(false);
    protected error = signal(false);

    protected updateStyle(
        key: keyof Styles,
        value: any,
    ) {
        this.styles.update(current => ({
            ...current,
            [key]: value,
        }));
        this.refreshLog();
    }

    protected updateEffect<Type extends keyof Effects>(
        type: Type,
        effect: Effects[Type][number],
        checked: boolean,
    ) {
        this.effects.update(current => {
            const currentValues = (current[type] ?? []) as Effects[Type];
            return {
                ...current,
                [type]: checked
                    ? [...currentValues, effect]
                    : currentValues.filter(e => e !== effect),
            } as Partial<Effects>;
        });
        this.refreshLog();
    }

    protected updateSetting(
        key: keyof Settings,
        checked: boolean,
    ) {
        this.settings.update(current => ({
            ...current,
            [key]: checked,
        }));
        this.refreshLog();
    }

    /**
     * Forms
     */
    protected form = new UntypedFormGroup({});
    protected validators: ValidatorFn[] = [];
    protected touched = signal(false);

    protected onlyCharactersRegex = '^[a-zA-ZÀ-ÿ ]+$';
    
    protected abstract initForm(): void;

    protected updateFormValidator(
        formName: string,
        validator: 'required' | 'minLength' | 'pattern-only-characters',
        value: any,
    ) {
        const requiredSignal = (this as any).required;
        const minLengthSignal = (this as any).minLength;
        const onlyCharactersSignal = (this as any).onlyCharacters;

        let requiredEnabled = typeof requiredSignal === 'function'
            ? !!requiredSignal()
            : false;
        let minLengthValue = typeof minLengthSignal === 'function'
            ? Number(minLengthSignal())
            : undefined;
        let onlyCharactersEnabled = typeof onlyCharactersSignal === 'function'
            ? !!onlyCharactersSignal()
            : false;

        switch (validator) {
            case 'required':
                requiredEnabled = !!value;
                break;
            case 'minLength':
                minLengthValue = Number(value);
                break;
            case 'pattern-only-characters':
                onlyCharactersEnabled = !!value;
                break;
        }

        this.validators = [
            requiredEnabled ? Validators.required : null,
            Number.isFinite(minLengthValue) && (minLengthValue as number) >= 0
                ? Validators.minLength(minLengthValue as number)
                : null,
            onlyCharactersEnabled ? Validators.pattern(this.onlyCharactersRegex) : null,
        ].filter((v): v is ValidatorFn => v !== null);

        this.form.get(formName)?.setValidators(this.validators.length > 0 ? this.validators : null);
        this.form.get(formName)?.updateValueAndValidity();
    }

    /**
     * Logs
     */
    protected lastInteractionTime = signal<string>('--:--:--.--');
    protected logProperties = signal<string[]>([]);
    protected log = signal('');

    protected refreshLastInteractionTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const centiseconds = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
        this.lastInteractionTime.set(`${hours}:${minutes}:${seconds}.${centiseconds}`);
    }

    protected refreshLog() {
        var result = '';
        this.logProperties().forEach(property => {
            result += `[${property}]=\"${this.prettify((this as any)[property]())}\",\n`;
        });
        this.log.set(result);
    }

    private prettify(property: any): string {
        return JSON.stringify(property, null, 4)
            .replace(/"([^\"]+)":/g, '$1:')
            .replace(/"/g, "'");
    }
}