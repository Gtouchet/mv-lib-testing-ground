import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonComponent, MvLibButtonStyle } from "mv-lib";
import { SpecificDemoSidebarComponent } from "../../../_base/sidebar/sidebar.component";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";

@Component({
    selector: 'app-button-href',
    imports: [
        // SpecificDemoSidebarComponent,
        MvLibButtonComponent,
        INPUTS,
    ],
    templateUrl: './button-href.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class ButtonHrefComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected lastUpdated = '02/10/2026';

    protected _button = viewChild.required<MvLibButtonComponent>('button');

    protected style = signal<Partial<MvLibButtonStyle>>({
        dimensions: {
            width: '150px',
            height: '32px',
        },
    });

    ngAfterViewInit() {
        this.logs.set({
            button: {
                code: [
                    { property: 'href', value: () => this._button().href() },
                ],
            },
        });
    }
}