import { AfterViewInit, Directive, inject, OnInit, signal, viewChild } from "@angular/core";
import { UntypedFormGroup, ValidatorFn, Validators } from "@angular/forms";
import { StylesService } from "../styles/styles.service";
import { EffectsOf, MV_LIB_EFFECTS, MvLibComponentEffectApi, MvLibCoreComponentApi, SettingsOf, StylesOf } from "mv-lib";

@Directive({
    standalone: true,
})
export abstract class BaseExampleComponent<
    MvLibComponent extends
        MvLibCoreComponentApi<any, any> &
        MvLibComponentEffectApi<any> = any
> implements OnInit, AfterViewInit {

    protected appStyles = inject(StylesService);

    protected mvLibComponent = viewChild<MvLibComponent>('mvLibComponent');

    ngOnInit() {
        this.initForm();
        this.refreshLog();
    }

    ngAfterViewInit() {
        this.refreshStyle();
        this.styleInitialized.set(true);
        this.refreshEffects();
        this.effectsInitialized.set(true);
        this.refreshSettings();
        this.settingsInitialized.set(true);
        this.refreshLog();
    }

    /**
     * Styles, Effects, Settings
     */
    public mvLibEffects = MV_LIB_EFFECTS;

    protected styleInitialized = signal(false);
    protected effectsInitialized = signal(false);
    protected settingsInitialized = signal(false);

    public styles = signal<Partial<StylesOf<MvLibComponent>>>({});
    public effects = signal<Partial<EffectsOf<MvLibComponent>>>({});
    public settings = signal<Partial<SettingsOf<MvLibComponent>>>({});

    protected refreshStyle = () => this.styles.set(this.mvLibComponent?.()?.getStyle() ?? {});
    protected refreshEffects = () => this.effects.set(this.mvLibComponent?.()?.getEffects() ?? {});
    protected refreshSettings = () => this.settings.set(this.mvLibComponent?.()?.getSettings() ?? {});

    protected disabled = signal(false);
    protected selected = signal(false);
    protected opened = signal(false);
    protected active = signal(false);

    /**
     * Component's API
     */
    public getStyle(): StylesOf<MvLibComponent> {
        if (!this.mvLibComponent()) return {} as StylesOf<MvLibComponent>;
        return this.mvLibComponent()!.getStyle();
    }

    public getSpecificStyle(path: string): any {
        if (!this.mvLibComponent()) return undefined;
        console.log('getSpecificStyle', path);
        return this.mvLibComponent()!.getSpecificStyle(path);
    }

    public setStyle(path: string, value: any) {
        if (!this.mvLibComponent()) return;
        this.mvLibComponent()!.setStyle(path, value);
        this.refreshStyle();
        this.refreshLog();
    }

    public getEffects(): EffectsOf<MvLibComponent> {
        if (!this.mvLibComponent()) return {} as EffectsOf<MvLibComponent>;
        return this.mvLibComponent()!.getEffects();
    }

    public getSpecificEffect(path: string): any {
        if (!this.mvLibComponent()) return undefined;
        return this.mvLibComponent()!.getSpecificEffect(path);
    }

    public getSpecificEffectStyle(path: string): any {
        if (!this.mvLibComponent()) return undefined;
        return this.mvLibComponent()!.getSpecificEffectStyle(path);
    }

    public setEffect(effect: string, enabled: boolean) {
        if (!this.mvLibComponent()) return;
        this.mvLibComponent()!.setEffect(effect, enabled);
        this.refreshEffects();
        this.refreshLog();
    }

    public setEffectStyle(path: string, value: any) {
        if (!this.mvLibComponent()) return;
        this.mvLibComponent()!.setEffectStyle(path, value);
        this.refreshEffects();
        this.refreshLog();
    }

    public getSettings(): SettingsOf<MvLibComponent> {
        if (!this.mvLibComponent()) return {} as SettingsOf<MvLibComponent>;
        return this.mvLibComponent()!.getSettings();
    }

    public getSpecificSettings(path: string): any {
        if (!this.mvLibComponent()) return undefined;
        return this.mvLibComponent()!.getSpecificSettings(path);
    }

    public setSettings(settings: string, value: any) {
        if (!this.mvLibComponent()) return;
        this.mvLibComponent()!.setSettings(settings, value);
        this.refreshSettings();
        this.refreshLog();
    }

    public hasEffectClass(className: string): boolean {
        if (!this.mvLibComponent()) return false;
        return this.mvLibComponent()!.hasEffectClass(className);
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
        var result = '\n';
        this.logProperties().forEach(property => {
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