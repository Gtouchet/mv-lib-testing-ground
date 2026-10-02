import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibNumericTextboxComponent, MvLibNumericTextboxStyle } from "mv-lib";
import { SpecificDemoSidebarComponent } from "../../../_base/sidebar/sidebar.component";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";

@Component({
    selector: 'app-numeric-textbox-events',
    imports: [
        SpecificDemoSidebarComponent,
        MvLibNumericTextboxComponent,
        INPUTS,
    ],
    templateUrl: './numeric-textbox-events.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class NumericTextboxEventsComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected lastUpdated = '12/09/2026';

    protected _textboxOnSelect = viewChild.required<MvLibNumericTextboxComponent>('textboxOnSelect');
    protected _textboxOnChange = viewChild.required<MvLibNumericTextboxComponent>('textboxOnChange');
    protected _textboxOnStepperButtonClick = viewChild.required<MvLibNumericTextboxComponent>('textboxOnStepperButtonClick');
    protected _textboxOnHold = viewChild.required<MvLibNumericTextboxComponent>('textboxOnHold');

    protected style = signal<Partial<MvLibNumericTextboxStyle>>({
        dimensions: {
            width: '150px',
            height: '32px',
        },
    });

    ngAfterViewInit() {
        
    }
}