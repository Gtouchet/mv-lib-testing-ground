import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonComponent, MvLibButtonStyle } from "mv-lib";
import { SpecificDemoSidebarComponent } from "../../../_base/sidebar/sidebar.component";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";
import { DemoPlaygroundComponent } from "../../../_base/playground/demo-playground.component";

@Component({
    selector: 'app-button-effects',
    imports: [
        SpecificDemoSidebarComponent,
        MvLibButtonComponent,
        DemoPlaygroundComponent,
        INPUTS,
    ],
    templateUrl: './button-effects.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class ButtonEffectsComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected lastUpdated = '23/11/2026';

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
                    { property: 'inputEffects', value: () => this._button().getEffects() },
                ],
            },
        });
    }
}
