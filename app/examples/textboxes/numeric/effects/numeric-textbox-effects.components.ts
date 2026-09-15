import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonClassicComponent, MvLibNumericTextboxComponent, MvLibNumericTextboxStyle } from "mv-lib";
import { SpecificDemoSidebarComponent } from "../../../_base/sidebar/sidebar.component";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";

@Component({
    selector: 'app-numeric-textbox-effects',
    imports: [
        SpecificDemoSidebarComponent,
        MvLibNumericTextboxComponent,
        MvLibButtonClassicComponent,
        INPUTS,
    ],
    templateUrl: './numeric-textbox-effects.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class NumericTextboxEffectsComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected _textboxHover = viewChild.required<MvLibNumericTextboxComponent>('textboxHover');
    protected _textboxSelected = viewChild.required<MvLibNumericTextboxComponent>('textboxSelected');
    protected _textboxComplete = viewChild.required<MvLibNumericTextboxComponent>('textboxComplete');

    protected textboxCompleteSelected = signal('hovered');

    protected style = signal<Partial<MvLibNumericTextboxStyle>>({
        dimensions: {
            width: '150px',
            height: '32px',
        },
    });

    ngAfterViewInit() {
        this.logProperties = {
            hovered: [
                { property: 'inputEffects', value: () => ({
                    classes: this._textboxHover().getEffects().classes,
                    styles: {
                        tintHover: this._textboxHover().getEffects().styles.tintHover,
                    }
                }) },
            ],
            selected: [
                { property: 'inputEffects', value: () => ({
                    classes: this._textboxSelected().getEffects().classes,
                    styles: {
                        outlineBlurSelected: this._textboxSelected().getEffects().styles.outlineBlurSelected,
                        outlineSolidSelected: this._textboxSelected().getEffects().styles.outlineSolidSelected,
                        tintSelected: this._textboxSelected().getEffects().styles.tintSelected,
                    },
                }) },
            ],
            complete: [
                { property: 'inputEffects', value: () => ({
                    classes: this._textboxComplete().getEffects().classes,
                    styles: {
                        tintHover: this._textboxComplete().getEffects().styles.tintHover,
                        tintSelected: this._textboxComplete().getEffects().styles.tintSelected,
                        outlineBlurSelected: this._textboxComplete().getEffects().styles.outlineBlurSelected,
                        outlineSolidSelected: this._textboxComplete().getEffects().styles.outlineSolidSelected,
                    }
                }) },
            ],
        };
        this.refreshLogs();
    }
}