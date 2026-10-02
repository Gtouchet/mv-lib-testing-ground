import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonComponent, MvLibButtonStyle } from "mv-lib";
import { SpecificDemoSidebarComponent } from "../../../_base/sidebar/sidebar.component";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";

@Component({
    selector: 'app-button-style',
    imports: [
        // SpecificDemoSidebarComponent,
        MvLibButtonComponent,
        INPUTS,
    ],
    templateUrl: './button-style.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class ButtonStyleComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected lastUpdated = '02/10/2026';

    protected _button = viewChild.required<MvLibButtonComponent>('button');

    protected style = signal<Partial<MvLibButtonStyle>>({
        dimensions: {
            width: '150px',
            height: '32px',
        },
    });

    protected selected = signal(false);

    ngAfterViewInit() {
        this.logs.set({
            button: {
                code: [
                    { property: 'inputStyle', value: () => ({
                        backgroundColor: this._button().api.style.getBackgroundColor(),
                        selectedBackgroundColor: this._button().api.style.getSelectedBackgroundColor(),
                        dimensions: this._button().api.style.getDimensions(),
                        outline: this._button().api.style.getOutline(),
                        font: this._button().api.style.getFont(),
                    }) },
                ],
            },
        });
    }
}