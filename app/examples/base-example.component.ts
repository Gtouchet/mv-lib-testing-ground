import { Directive, inject, model, signal } from "@angular/core";
import { UntypedFormGroup, ValidatorFn, Validators } from "@angular/forms";
import { MV_LIB_EFFECTS, MvLibThemeService, MvLibToastService } from "mv-lib";

@Directive({
    standalone: true,
})
export abstract class BaseExampleComponent {

    protected readonly mvLibEffects = MV_LIB_EFFECTS;

    protected readonly themeService = inject(MvLibThemeService);
    protected readonly toastService = inject(MvLibToastService);

    protected selectedPartStyle = signal<string | undefined>(undefined);
    protected selectedPartEffects = signal<string | undefined>(undefined);
    protected selectedPartSettings = signal<string | undefined>(undefined);

    protected disabled = model(false);

    constructor() {
        this.initForm();
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
    protected logProperties: { property: string, value: (() => any) | any }[] = [];
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
        var result = `\n`;
        this.logProperties.forEach(property => {
            const value = typeof property.value === 'function'
                ? property.value()
                : property.value;
            result += `    [${property.property}]="${this.prettify(value)}",\n`;
        });
        this.log.set(result);
    }

    protected prettify(property: any): string {
        return JSON.stringify(property, null, 4)
            .replace(/"([^"]+)":/g, '$1:')
            .replace(/"/g, "'")
            .replace(/\n/g, '\n    ');
    }

    protected copyComponentCode(componentName: string) {
        navigator.clipboard.writeText(`<${componentName}${this.log()} />`)
            .then(() =>
                this.toastService.success(
                    `Copied component code`,
                    'content_copy',
                    { width: '250px' }
                )
            )
            .catch(() =>
                this.toastService.error(
                    'Failed to copy component code',
                    'error',
                    { width: '300px' }
                )
            );
    }
}