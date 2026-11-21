import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../../inputs/_inputs.export";
import { MvLibButtonComponent, MvLibButtonStyle, MvLibComponentState } from "mv-lib";
import { SpecificDemoBaseComponent } from "../../../_base/specific-demo.base";
import { DemoPlaygroundComponent } from "../../../_base/playground/demo-playground.component";

@Component({
    selector: 'app-button-style',
    imports: [
        MvLibButtonComponent,
        DemoPlaygroundComponent,
        INPUTS,
    ],
    templateUrl: './button-style.component.html',
    styleUrl: '../../../_base/specific-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class ButtonStyleComponent extends SpecificDemoBaseComponent implements AfterViewInit {

    protected lastUpdated = '21/11/2026';

    protected _button = viewChild.required<MvLibButtonComponent>('button');

    protected style = signal<Partial<MvLibButtonStyle>>({
        dimensions: {
            width: '150px',
            height: '32px',
        },
    });

    protected selected = signal(false);

    protected buttonStates: MvLibComponentState[] = ['idle', 'hovered', 'selected', 'hoveredSelected'];
    protected outlineState = signal<MvLibComponentState>('idle');
    protected fontState = signal<MvLibComponentState>('idle');

    ngAfterViewInit() {
        this.logs.set({
            button: {
                code: [
                    { property: 'inputStyle', value: () => ({
                        backgroundColor: {
                            idle: this._button().api.style.backgroundColor.getForState('idle'),
                            hovered: this._button().api.style.backgroundColor.getForState('hovered'),
                            selected: this._button().api.style.backgroundColor.getForState('selected'),
                            hoveredSelected: this._button().api.style.backgroundColor.getForState('hoveredSelected'),
                        },
                        dimensions: this._button().api.style.getDimensions(),
                        outline: {
                            idle: this._button().api.style.outline.getForState('idle'),
                            hovered: this._button().api.style.outline.getForState('hovered'),
                            selected: this._button().api.style.outline.getForState('selected'),
                            hoveredSelected: this._button().api.style.outline.getForState('hoveredSelected'),
                        },
                        font: {
                            idle: this._button().api.style.font.getForState('idle'),
                            hovered: this._button().api.style.font.getForState('hovered'),
                            selected: this._button().api.style.font.getForState('selected'),
                            hoveredSelected: this._button().api.style.font.getForState('hoveredSelected'),
                        },
                    }) },
                ],
            },
        }); 
    }
}