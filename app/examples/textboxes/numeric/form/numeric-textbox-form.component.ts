import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonComponent, MvLibNumericTextboxComponent, MvLibNumericTextboxStyle } from "mv-lib";
import { SpecificDemoSidebarComponent } from "../../../_base/sidebar/sidebar.component";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";
import { FormControl, ReactiveFormsModule, UntypedFormGroup } from "@angular/forms";

@Component({
    selector: 'app-numeric-textbox-form',
    imports: [
        SpecificDemoSidebarComponent,
        MvLibButtonComponent,
        MvLibNumericTextboxComponent,
        ReactiveFormsModule,
        INPUTS,
    ],
    templateUrl: './numeric-textbox-form.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class NumericTextboxFormComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected lastUpdated = '17/10/2026';

    protected readonly validatorValue = toSignal<number | null | undefined>(
        this.forms['validators'].controls['input'].valueChanges,
        { initialValue: this.forms['validators'].controls['input'].value },
    );
    
    protected _textboxValidators = viewChild.required<MvLibNumericTextboxComponent>('textboxValidators');
    protected _textboxCva = viewChild.required<MvLibNumericTextboxComponent>('textboxCva');

    protected style = signal<Partial<MvLibNumericTextboxStyle>>({
        dimensions: {
            width: '150px',
            height: '32px',
        },
    });

    ngAfterViewInit() {
        this.logs.set({
            validators: {
                code: [
                    { property: 'inputFormErrorLabels', value: () => ({
                        required: this._textboxValidators().api.form.getRequiredErrorLabel(),
                        min: this._textboxValidators().api.form.getMinErrorLabel(),
                        max: this._textboxValidators().api.form.getMaxErrorLabel(),
                    }) },
                ],
            },
        });

        this._textboxCva().registerOnTouched(() => this.addCvaAction('registerOnTouched'));
        this._textboxCva().registerOnChange(() => this.addCvaAction('registerOnChange'));
    }

    protected override initForm() {
        this.forms['validators'] = new UntypedFormGroup({
            input: new FormControl({
                value: undefined,
                disabled: false,
            }),
        });

        this.forms['cva'] = new UntypedFormGroup({
            input: new FormControl({
                value: 1,
                disabled: false,
            }),
        });
        
        this.min.set(0);
        this.max.set(5);
        
        this.updateFormValidator(
            'validators',
            'input',
            'required',
            this.required() ? this.formValidators.required : null,
            false,
        );
        this.updateFormValidator(
            'validators',
            'input',
            'min',
            this.min() == null ? null : this.formValidators.min(this.min()!),
            false,
        );
        this.updateFormValidator(
            'validators',
            'input',
            'max',
            this.max() == null ? null : this.formValidators.max(this.max()!),
            false,
        );
    }
}