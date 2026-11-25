import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonComponent, MvLibCardComponent, MvLibCardStyle } from "mv-lib";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";
import { DemoPlaygroundComponent } from "../../../_base/playground/demo-playground.component";

@Component({
    selector: 'app-card-style',
    imports: [
        MvLibCardComponent,
        MvLibButtonComponent,
        DemoPlaygroundComponent,
        INPUTS,
    ],
    templateUrl: './card-style.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class CardStyleComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected lastUpdated = '23/11/2026';

    protected _card = viewChild.required<MvLibCardComponent>('card');

    protected style = signal<Partial<MvLibCardStyle>>({
        dimensions: {
            width: '300px',
        },
    });

    ngAfterViewInit() {
        this.logs.set({
            card: {
                code: [
                    { property: 'inputStyle', value: () => ({
                        backgroundColor: this._card().api.style.backgroundColor.get(),
                        dimensions: this._card().api.style.getDimensions(),
                        outline: this._card().api.style.outline.get(),
                        font: this._card().api.style.font.get(),
                    }) },
                ],
            },
        });
    }
}
