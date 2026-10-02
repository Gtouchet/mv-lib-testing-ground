import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonComponent, MvLibNumericTextboxComponent, MvLibNumericTextboxStyle } from "mv-lib";
import { SpecificDemoSidebarComponent } from "../../../_base/sidebar/sidebar.component";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";

@Component({
    selector: 'app-numeric-textbox-effects',
    imports: [
        SpecificDemoSidebarComponent,
        MvLibNumericTextboxComponent,
        MvLibButtonComponent,
        INPUTS,
    ],
    templateUrl: './numeric-textbox-effects.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class NumericTextboxEffectsComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected lastUpdated = '21/09/2026';

    protected _inputArea = viewChild.required<MvLibNumericTextboxComponent>('inputArea');
    protected _stepperButtons = viewChild.required<MvLibNumericTextboxComponent>('stepperButtons');

    protected stepperButtonsSelected = signal<'increment' | 'decrement'>('increment');

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
                    { property: 'inputEffects', value: () => ({
                        textbox: {
                            classes: this._inputArea().getEffects().textbox.classes,
                            styles: {
                                tintHover: this._inputArea().getEffects().textbox.styles!.tintHover,
                                tintSelected: this._inputArea().getEffects().textbox.styles!.tintSelected,
                                outlineBlurSelected: this._inputArea().getEffects().textbox.styles!.outlineBlurSelected,
                                outlineSolidSelected: this._inputArea().getEffects().textbox.styles!.outlineSolidSelected,
                            }
                        }
                    }) },
                ],
            },
            stepperButtons: {
                code: [
                    { property: 'inputEffects', value: () => ({
                        incrementButton: {
                            classes: [],
                            styles: {
                                
                            },
                        },
                        decrementButton: {
                            classes: [],
                            styles: {
                                
                            },
                        },
                    }) },
                ],
            },
        });
    }
}