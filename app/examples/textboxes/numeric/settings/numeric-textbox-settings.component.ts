import { AfterViewInit, ChangeDetectionStrategy, Component, model, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonComponent, MvLibNumericTextboxComponent, MvLibNumericTextboxStyle } from "mv-lib";
import { SpecificDemoSidebarComponent } from "../../../_base/sidebar/sidebar.component";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";

@Component({
    selector: 'app-numeric-textbox-settings',
    imports: [
        SpecificDemoSidebarComponent,
        MvLibNumericTextboxComponent,
        MvLibButtonComponent,
        INPUTS,
    ],
    templateUrl: './numeric-textbox-settings.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class NumericTextboxSettingsComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected lastUpdated = '12/09/2026';

    protected _state = viewChild.required<MvLibNumericTextboxComponent>('state');
    protected _inputArea = viewChild.required<MvLibNumericTextboxComponent>('inputArea');
    protected _stepperButtons = viewChild.required<MvLibNumericTextboxComponent>('stepperButtons');

    protected style = signal<Partial<MvLibNumericTextboxStyle>>({
        dimensions: {
            width: '150px',
            height: '32px',
        },
    });

    protected disabled = model(false);
    protected selected = model(false);

    ngAfterViewInit() {
        this.logs.set({
            state: {
                code: [
                    { property: '(disabled)', value: () => this._state().api.getDisabled() },
                    { property: '(selected)', value: () => this._state().api.getSelected() },
                ],
            },
            inputArea: {
                code: [
                    { property: 'inputSettings', value: () => ({
                        min: this._inputArea().api.settings.getMin(),
                        max: this._inputArea().api.settings.getMax(),
                        unit: {
                            placement: this._inputArea().api.settings.unit.getPlacement(),
                            value: this._inputArea().api.settings.unit.getValue(),
                        },
                    }) },
                ],
            },
            stepperButtons: {
                code: [
                    { property: 'inputSettings', value: () => ({
                        stepperButtons: {
                            displayed: this._stepperButtons().api.settings.stepperButtons.getDisplayed(),
                            allowHold: this._stepperButtons().api.settings.stepperButtons.getAllowHold(),
                            holdDelay: this._stepperButtons().api.settings.stepperButtons.getHoldDelay(),
                            repeatInterval: this._stepperButtons().api.settings.stepperButtons.getRepeatInterval(),
                            step: this._stepperButtons().api.settings.stepperButtons.getStep(),
                        }
                    }) },
                ],
            },
        });
    }
}