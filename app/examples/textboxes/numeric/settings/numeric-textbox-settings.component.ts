import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonClassicComponent, MvLibNumericTextboxComponent, MvLibNumericTextboxStyle } from "mv-lib";
import { SpecificDemoSidebarComponent } from "../../../_base/sidebar/sidebar.component";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";

@Component({
    selector: 'app-numeric-textbox-settings',
    imports: [
        SpecificDemoSidebarComponent,
        MvLibNumericTextboxComponent,
        MvLibButtonClassicComponent,
        INPUTS,
    ],
    templateUrl: './numeric-textbox-settings.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class NumericTextboxSettingsComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected _textboxState = viewChild.required<MvLibNumericTextboxComponent>('textboxState');
    protected _textboxMinMax = viewChild.required<MvLibNumericTextboxComponent>('textboxMinMax');
    protected _textboxUnit = viewChild.required<MvLibNumericTextboxComponent>('textboxUnit');
    protected _textboxStepperButtonsSettings = viewChild.required<MvLibNumericTextboxComponent>('textboxStepperButtonsSettings');
    protected _textboxStepperButtonsStyle = viewChild.required<MvLibNumericTextboxComponent>('textboxStepperButtonsStyle');
    protected _textboxComplete = viewChild.required<MvLibNumericTextboxComponent>('textboxComplete');

    protected textboxCompleteSelected = signal('minMax');

    protected style = signal<Partial<MvLibNumericTextboxStyle>>({
        dimensions: {
            width: '150px',
            height: '32px',
        },
    });

    ngAfterViewInit() {
        this.logProperties = {
            state: [
                { property: 'disabled', value: () => this._textboxState().api.getDisabled() },
                { property: 'selected', value: () => this._textboxState().api.getSelected() },
            ],
            minMax: [
                { property: 'inputSettings', value: () => ({
                    min: this._textboxMinMax().api.settings.getMin(),
                    max: this._textboxMinMax().api.settings.getMax(),
                }) },
            ],
            unit: [
                { property: 'inputSettings', value: () => ({
                    unit: {
                        value: this._textboxUnit().api.settings.unit.getValue(),
                        placement: this._textboxUnit().api.settings.unit.getPlacement(),
                    },
                }) },
            ],
            stepperButtonsSettings: [
                { property: 'inputSettings', value: () => ({
                    stepperButtons: {
                        displayed: this._textboxStepperButtonsSettings().api.settings.stepperButtons.getDisplayed(),
                        allowHold: this._textboxStepperButtonsSettings().api.settings.stepperButtons.getAllowHold(),
                        holdDelay: this._textboxStepperButtonsSettings().api.settings.stepperButtons.getHoldDelay(),
                        repeatInterval: this._textboxStepperButtonsSettings().api.settings.stepperButtons.getRepeatInterval(),
                        step: this._textboxStepperButtonsSettings().api.settings.stepperButtons.getStep(),
                    }
                }) },
            ],
            complete: [
                { property: 'disabled', value: () => this._textboxComplete().api.getDisabled() },
                { property: 'selected', value: () => this._textboxComplete().api.getSelected() },
                { property: 'inputSettings', value: () => ({
                    min: this._textboxComplete().api.settings.getMin(),
                    max: this._textboxComplete().api.settings.getMax(),
                    unit: {
                        value: this._textboxComplete().api.settings.unit.getValue(),
                        placement: this._textboxComplete().api.settings.unit.getPlacement(),
                    },
                    stepperButtons: {
                        displayed: this._textboxComplete().api.settings.stepperButtons.getDisplayed(),
                        allowHold: this._textboxComplete().api.settings.stepperButtons.getAllowHold(),
                        holdDelay: this._textboxComplete().api.settings.stepperButtons.getHoldDelay(),
                        repeatInterval: this._textboxComplete().api.settings.stepperButtons.getRepeatInterval(),
                        step: this._textboxComplete().api.settings.stepperButtons.getStep(),
                    }
                }) }
            ]
        };
        this.refreshLogs();
    }
}