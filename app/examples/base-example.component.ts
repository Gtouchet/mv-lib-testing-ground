import { AfterViewInit, Directive, inject, OnInit, Signal, signal } from "@angular/core";
import { UntypedFormGroup, ValidatorFn, Validators } from "@angular/forms";
import { StylesService } from "../styles/styles.service";

@Directive({
    standalone: true,
})
export abstract class BaseExampleComponent<
    Styles,
    Effects extends { [K in keyof Effects]: unknown[] },
    EffectsStyles,
    Settings
> implements OnInit, AfterViewInit {

    protected appStyles = inject(StylesService);

    protected mvLibComponent?: Signal<any>;

    ngOnInit() {
        this.initForm();
        this.refreshLog();
    }

    ngAfterViewInit() {
        this.styles.set(this.mvLibComponent?.()?.getStyles() ?? {});
        this.effects.set(this.mvLibComponent?.()?.getEffects() ?? {});
        this.effectsStyles.set(this.mvLibComponent?.()?.getEffectsStyles() ?? {});
        this.settings.set(this.mvLibComponent?.()?.getSettings() ?? {});
        this.refreshLog();
    }

    /**
     * Styles, Effects, Settings
     */
    protected styles = signal<Partial<Styles>>({});
    protected effects = signal<Partial<Effects>>({});
    protected effectsStyles = signal<Partial<EffectsStyles>>({});
    protected settings = signal<Partial<Settings>>({});

    protected disabled = signal(false);
    protected selected = signal(false);
    protected opened = signal(false);
    protected active = signal(true);

    protected updateStyle(
        path: string,
        value: any,
    ) {
        this.styles.update(current => {
            const keys = path.split('.');
            const update = (obj: any, index: number): any => {
                const key = keys[index];
                if (index === keys.length - 1) {
                    return {
                        ...obj,
                        [key]: value,
                    };
                }
                return {
                    ...obj,
                    [key]: update(obj?.[key] ?? {}, index + 1),
                };
            };
            return update(current, 0);
        });
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

    protected updateEffectStyle(
        effect: keyof EffectsStyles,
        value: any,
    ) {
        this.effectsStyles.update(current => ({
            ...current,
            [effect]: value,
        }));
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
    protected initForm(): void {}

    protected form = new UntypedFormGroup({});
    protected validators: ValidatorFn[] = [];

    protected required = signal(true);
    protected minLength = signal<number | undefined>(3);
    protected onlyCharacters = signal(true);
    protected onlyCharactersRegex = '^[a-zA-ZÀ-ÿ ]+$';

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
    protected additionalLogProperties = signal<string[]>([]);
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
        var result = `
[styles]=\"${this.prettify((this as any)['styles']())}\",
[effects]=\"${this.prettify((this as any)['effects']())}\",
[effectsStyles]=\"${this.prettify((this as any)['effectsStyles']())}\",
[settings]=\"${this.prettify((this as any)['settings']())}\",
[disabled]="${this.prettify(this.form ? this.form.disabled : this.disabled())}",
`;
        this.additionalLogProperties().forEach(property => {
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