import { Directive, inject, signal } from "@angular/core";
import { AbstractControl, UntypedFormGroup, ValidatorFn, Validators } from "@angular/forms";
import { MV_LIB_EFFECTS, MvLibToastService } from "mv-lib";

type ValidatorKey =
    | 'required'
    | 'min'
    | 'max'
    | 'minLength'
    | 'maxLength'
    | 'onlyCharacters';

interface CvaAction {
    readonly index: number;
    readonly action: string;
}

interface EventLog {
    readonly index: number;
    readonly event: string;
}

@Directive({
    standalone: true,
})
export abstract class DemoBaseComponent {
    
    protected readonly mvLibEffects = MV_LIB_EFFECTS;
    protected readonly toastService = inject(MvLibToastService);

    constructor() {
        this.initForm();
    }

    /**
     * Forms
     */
    protected initForm(): void {}

    protected forms: Record<string, UntypedFormGroup> = {};
    protected readonly formValidators = Validators;

    private readonly dynamicValidators = new WeakMap<AbstractControl, Map<ValidatorKey, ValidatorFn>>();

    protected required = signal(true);
    protected min = signal<number | undefined>(undefined);
    protected max = signal<number | undefined>(undefined);
    protected minLength = signal<number | undefined>(undefined);
    protected maxLength = signal<number | undefined>(undefined);
    protected onlyCharacters = signal(true);
    protected onlyCharactersRegex = '^[a-zA-ZÀ-ÿ ]+$';

    protected updateFormValidator(
        formKey: string,
        controlName: string,
        key: ValidatorKey,
        validator: ValidatorFn | null,
        emitEvent = true,
    ) {
        const form = this.forms[formKey];
        if (!form) {
            throw new Error(`Unknown form: ${formKey}`);
        }

        const control = form.get(controlName);
        if (!control) {
            throw new Error(`Unknown form control: ${formKey}.${controlName}`);
        }

        let validators = this.dynamicValidators.get(control);
        if (!validators) {
            validators = new Map();
            this.dynamicValidators.set(control, validators);
        }

        const previousValidator = validators.get(key);
        if (previousValidator) {
            control.removeValidators(previousValidator);
            validators.delete(key);
        }

        if (validator) {
            validators.set(key, validator);
            control.addValidators(validator);
        }
        
        control.updateValueAndValidity({ emitEvent });
    }

    protected cvaActions = signal<CvaAction[]>([]);
    protected addCvaAction(action: string) {
        const newAction: CvaAction = {
            index: this.cvaActions().length + 1,
            action: action,
        };
        this.cvaActions.update(actions => [newAction, ...actions]);
    }

    /**
     * Events
     */
    protected eventLogs = signal<EventLog[]>([]);
    protected addEventLog(event: string) {
        const newLog: EventLog = {
            index: this.eventLogs().length + 1,
            event: event,
        };
        this.eventLogs.update(logs => [newLog, ...logs]);
    }

    /**
     * Logs
     */
    protected prettify(property: unknown): string {
        return JSON.stringify(property, null, 4)
            .replace(/"([^"]+)":/g, '$1:')
            .replace(/"/g, "'")
            .replace(/\n/g, '\n    ');
    }
}