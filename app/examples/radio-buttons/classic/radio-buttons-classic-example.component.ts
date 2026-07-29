import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { BaseExampleComponent } from "../../base-example.component";
import { CommonModule, JsonPipe } from "@angular/common";
import { INPUTS } from "../../../inputs/_inputs.export";
import { MvLibRadioButtonsClassicComponent, MvLibRadioButtonsDirectives } from "mv-lib";

interface User {
  id: number;
  name: string;
}

@Component({
    selector: 'app-radio-buttons-classic-example',
    imports: [
        CommonModule,
        MvLibRadioButtonsClassicComponent,
        MvLibRadioButtonsDirectives,
        INPUTS,
        JsonPipe,
    ],
    templateUrl: './radio-buttons-classic-example.component.html',
    styleUrl: '../../example.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class RadioButtonsClassicExampleComponent extends BaseExampleComponent<MvLibRadioButtonsClassicComponent<User>> {

    protected selectedItem = signal<User | undefined>(undefined);
    protected items = signal<User[]>([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' },
        { id: 5, name: 'Eve' },
        { id: 6, name: 'Frank' },
        { id: 7, name: 'Grace' },
        { id: 8, name: 'Henry' },
        { id: 9, name: 'Ivy' },
    ]);

    constructor() {
        super();
        this.styles = signal({
            sizePx: 16,
            backgroundColor: this.appStyles.var('radio-buttons-classic-background-color'),
            selectedColor: this.appStyles.var('radio-buttons-classic-selected-color'),

            groupGapPx: 4,
            contentGapPx: 6,
        });
        this.effects = signal({
        });
        this.settings = signal({
            orientation: 'vertical',
            selectOnLabelClick: true,
            deselectable: false,
        });
    }
}