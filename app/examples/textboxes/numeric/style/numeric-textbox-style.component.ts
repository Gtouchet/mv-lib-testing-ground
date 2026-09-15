import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonClassicComponent, MvLibNumericTextboxComponent, MvLibNumericTextboxStyle } from "mv-lib";
import { SpecificDemoSidebarComponent } from "../../../_base/sidebar/sidebar.component";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";

@Component({
    selector: 'app-numeric-textbox-style',
    imports: [
        SpecificDemoSidebarComponent,
        MvLibNumericTextboxComponent,
        MvLibButtonClassicComponent,
        INPUTS,
    ],
    templateUrl: './numeric-textbox-style.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class NumericTextboxStyleComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected _textboxGeneral = viewChild.required<MvLibNumericTextboxComponent>('textboxGeneral');
    protected _textboxDimensions = viewChild.required<MvLibNumericTextboxComponent>('textboxDimensions');
    protected _textboxOutline = viewChild.required<MvLibNumericTextboxComponent>('textboxOutline');
    protected _textboxFont = viewChild.required<MvLibNumericTextboxComponent>('textboxFont');
    protected _textboxStepperButtons = viewChild.required<MvLibNumericTextboxComponent>('textboxStepperButtons');
    protected _textboxComplete = viewChild.required<MvLibNumericTextboxComponent>('textboxComplete');

    protected textboxCompleteSelected = signal('textbox');

    protected style = signal<Partial<MvLibNumericTextboxStyle>>({
        dimensions: {
            width: '150px',
            height: '32px',
        },
    });

    ngAfterViewInit() {
        this.logProperties = {
            general: [
                { property: 'inputStyle', value: () => ({
                    backgroundColor: this._textboxGeneral().api.style.getBackgroundColor(),
                }) },
            ],
            dimensions: [
                { property: 'inputStyle', value: () => ({
                    dimensions: this._textboxDimensions().api.style.getDimensions(),
                }) },
            ],
            outline: [
                { property: 'inputStyle', value: () => ({
                    outline: this._textboxOutline().api.style.getOutline(),
                }) },
            ],
            font: [
                { property: 'inputStyle', value: () => ({
                    font: this._textboxFont().api.style.getFont(),
                }) },
            ],
            stepperButtons: [
                { property: 'inputStyle', value: () => ({
                    stepperButtons: {
                        width: this._textboxStepperButtons().api.style.stepperButtons.getWidth(),
                        increment: {
                            backgroundColor: this._textboxStepperButtons().api.style.stepperButtons.increment.getBackgroundColor(),
                            icon: this._textboxStepperButtons().api.style.stepperButtons.increment.getIcon(),
                        },
                        decrement: {
                            backgroundColor: this._textboxStepperButtons().api.style.stepperButtons.decrement.getBackgroundColor(),
                            icon: this._textboxStepperButtons().api.style.stepperButtons.decrement.getIcon(),
                        },
                    },
                }) },
            ],
            complete: [
                { property: 'inputStyle', value: () => ({
                    backgroundColor: this._textboxComplete().api.style.getBackgroundColor(),
                    dimensions: this._textboxComplete().api.style.getDimensions(),
                    outline: this._textboxComplete().api.style.getOutline(),
                    font: this._textboxComplete().api.style.getFont(),
                    stepperButtons: {
                        width: this._textboxComplete().api.style.stepperButtons.getWidth(),
                        increment: {
                            backgroundColor: this._textboxComplete().api.style.stepperButtons.increment.getBackgroundColor(),
                            icon: this._textboxComplete().api.style.stepperButtons.increment.getIcon(),
                        },
                        decrement: {
                            backgroundColor: this._textboxComplete().api.style.stepperButtons.decrement.getBackgroundColor(),
                            icon: this._textboxComplete().api.style.stepperButtons.decrement.getIcon(),
                        },
                    },
                }) },
            ],
        };
        this.refreshLogs();
    }
}