import { AfterViewInit, Directive, inject, OnInit, signal, viewChild } from "@angular/core";
import { UntypedFormGroup, ValidatorFn, Validators } from "@angular/forms";
import { StylesService } from "../styles/styles.service";
import { EffectsOf, MvLibComponentBase, SettingsOf, StylesOf } from "mv-lib";

type NestedKeyOf<T> = {
    [K in keyof T & string]:
        T[K] extends object
            ? K | `${K}.${NestedKeyOf<T[K]>}`
            : K
}[keyof T & string];

@Directive({
    standalone: true,
})
export abstract class BaseExampleComponent<
    MvLibComponent extends MvLibComponentBase<any, any, any, any> = any
> implements OnInit, AfterViewInit {

    protected appStyles = inject(StylesService);

    protected mvLibComponent = viewChild<MvLibComponent>('mvLibComponent');

    ngOnInit() {
        this.initForm();
        this.refreshLog();
    }

    ngAfterViewInit() {
        this.styles.set(this.mvLibComponent?.()?.getStyle() ?? {});
        this.settings.set(this.mvLibComponent?.()?.getSettings() ?? {});
        this.effects.set(this.mvLibComponent?.()?.getEffects() ?? {});
        this.refreshLog();
    }

    /**
     * Styles, Effects, Settings
     */

    protected styles = signal<Partial<StylesOf<MvLibComponent>>>({});
    protected settings = signal<Partial<SettingsOf<MvLibComponent>>>({});
    protected effects = signal<Partial<EffectsOf<MvLibComponent>>>({});

    protected disabled = signal(false);
    protected selected = signal(false);
    protected opened = signal(false);
    protected active = signal(true);

    protected setStyle(path: NestedKeyOf<StylesOf<MvLibComponent>>, value: any) {
        if (!this.mvLibComponent()) return;
        this.mvLibComponent()!.setStyle(path, value);
        this.refreshLog();
    }

    protected setSettings(settings: keyof SettingsOf<MvLibComponent>, enabled: boolean) {
        if (!this.mvLibComponent()) return;
        this.mvLibComponent()!.setSettings(settings, enabled);
        this.refreshLog();
    }

    protected setEffect(effect: string, enabled: boolean) {
        if (!this.mvLibComponent()) return;
        this.mvLibComponent()!.setEffect(effect, enabled);
        this.refreshLog();
    }

    protected setEffectStyle(path: string, value: any) {
        if (!this.mvLibComponent()) return;
        this.mvLibComponent()!.setEffectStyle(path, value);
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
        var result =
`
    [styles]=\"${this.prettify((this as any)['styles']())}\",
    [effects]=\"${this.prettify((this as any)['effects']())}\",
    [settings]=\"${this.prettify((this as any)['settings']())}\",
    [disabled]="${this.prettify(this.form ? this.form.disabled : this.disabled())}",
`;
        this.additionalLogProperties().forEach(property => {
            result += `    [${property}]=\"${this.prettify((this as any)[property]())}\",\n`;
        });
        this.log.set(result);
    }

    private prettify(property: any): string {
    return JSON.stringify(property, null, 4)
        .replace(/"([^"]+)":/g, '$1:')
        .replace(/"/g, "'")
        .replace(/\n/g, '\n    ');
}
}