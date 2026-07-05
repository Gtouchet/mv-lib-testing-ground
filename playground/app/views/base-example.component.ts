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
        event: any,
    ) {
        const target = event.target as HTMLInputElement | null;
        this.styles.update(current => ({
            ...current,
            [key]: target?.type === 'number'
                ? Number.isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber
                : target?.value,
        }));
        this.refreshLog();
    }

    protected updateEffect<Type extends keyof Effects>(
        type: Type,
        effect: Effects[Type][number],
        event: any,
    ) {
        this.effects.update(current => {
            const currentValues = (current[type] ?? []) as Effects[Type];
            return {
                ...current,
                [type]: event.target.checked
                    ? [...currentValues, effect]
                    : currentValues.filter(e => e !== effect),
            } as Partial<Effects>;
        });
        this.refreshLog();
    }

    protected updateSetting(
        key: keyof Settings,
        event: any,
    ) {
        const target = event.target as HTMLInputElement | null;
        this.settings.update(current => ({
            ...current,
            [key]: target?.type === 'number'
                ? Number.isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber
                : target?.type === 'checkbox'
                    ? target?.checked
                    : target?.value,
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
        switch (validator) {
            case 'required':
                this.validators = value ?
                    [...this.validators, Validators.required] :
                    this.validators.filter(v => v !== Validators.required);
                break;
            case 'minLength':
                this.validators = [
                    ...this.validators.filter(v => v !== Validators.minLength(value)),
                    Validators.minLength(value)
                ];
                break;
            case 'pattern-only-characters':
                this.validators = value ? [
                    ...this.validators.filter(v => v !== Validators.pattern(this.onlyCharactersRegex)),
                    Validators.pattern(this.onlyCharactersRegex)
                ] : this.validators.filter(v => v !== Validators.pattern(this.onlyCharactersRegex));
                break;
        }
        this.form.get(formName)?.setValidators(this.validators);
        this.form.get(formName)?.updateValueAndValidity();
    }

    /**
     * Logs
     */
    protected lastInteractionTime = signal<string>('00:00:00.00');
    protected logProperties = signal<string[]>([]);
    protected log = signal('');

    protected setLastInteractionTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const centiseconds = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
        this.lastInteractionTime.set(`${hours}:${minutes}:${seconds}.${centiseconds}`);
        this.refreshLog();
    }

    protected refreshLog() {
        var result = `Last interacted at ${this.lastInteractionTime()}\n\n`;
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