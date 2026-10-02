import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonComponent, MvLibNumericTextboxComponent, MvLibNumericTextboxStyle } from "mv-lib";
import { SpecificDemoSidebarComponent } from "../../../_base/sidebar/sidebar.component";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";

@Component({
    selector: 'app-numeric-textbox-style',
    imports: [
        SpecificDemoSidebarComponent,
        MvLibNumericTextboxComponent,
        MvLibButtonComponent,
        INPUTS,
    ],
    templateUrl: './numeric-textbox-style.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class NumericTextboxStyleComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected lastUpdated = '12/09/2026';

    protected _inputArea = viewChild.required<MvLibNumericTextboxComponent>('inputArea');
    protected _stepperButtons = viewChild.required<MvLibNumericTextboxComponent>('stepperButtons');

    protected style = signal<Partial<MvLibNumericTextboxStyle>>({
        dimensions: {
            width: '150px',
            height: '32px',
        },
    });

    ngAfterViewInit() {
        this.logs.set({
            inputArea: {
                code: [
                    { property: 'inputStyle', value: () => ({
                        backgroundColor: this._inputArea().api.style.getBackgroundColor(),
                        dimensions: this._inputArea().api.style.getDimensions(),
                        outline: this._inputArea().api.style.getOutline(),
                        font: this._inputArea().api.style.getFont(),
                    }) },
                ],
            },
            stepperButtons: {
                code: [
                    { property: 'inputStyle', value: () => ({
                        stepperButtons: {
                            width: this._stepperButtons().api.style.stepperButtons.getWidth(),
                            increment: {
                                backgroundColor: this._stepperButtons().api.style.stepperButtons.increment.getBackgroundColor(),
                                icon: this._stepperButtons().api.style.stepperButtons.increment.getIcon(),
                            },
                            decrement: {
                                backgroundColor: this._stepperButtons().api.style.stepperButtons.decrement.getBackgroundColor(),
                                icon: this._stepperButtons().api.style.stepperButtons.decrement.getIcon(),
                            },
                        },
                    }) },
                ],
            },
        });
    }
}