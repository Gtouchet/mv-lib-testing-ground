import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonComponent, MvLibButtonStyle } from "mv-lib";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";

@Component({
    selector: 'app-button-href',
    imports: [
        MvLibButtonComponent,
        INPUTS,
    ],
    templateUrl: './button-href.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class ButtonHrefComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected lastUpdated = '18/10/2026';

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
                    { property: 'inputSettings', value: () => ({
                        href: {
                            url: this._button().api.settings.href.getUrl(),
                            openInNewTab: this._button().api.settings.href.getOpenInNewTab(),
                        }
                    }) },
                ],
            },
        });
    }
}