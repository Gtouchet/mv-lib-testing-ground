import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { BaseExampleComponent } from "../../base-example.component";
import { MvLibRadioButtonsClassicComponent, MvLibRadioButtonsClassicEffects, MvLibRadioButtonsClassicSettings, MvLibRadioButtonsClassicStyles, MvLibRadioButtonsDirectives } from "mv-lib";
import { INPUTS } from "../../../shared/inputs/inputs.export";

interface User {
  id: number;
  name: string;
}

@Component({
    selector: 'app-radio-buttons-classic-example',
    imports: [
        MvLibRadioButtonsClassicComponent,
        MvLibRadioButtonsDirectives,
        INPUTS,
    ],
    templateUrl: './radio-buttons-classic-example.component.html',
    styleUrls: [
        './radio-buttons-classic-example.component.scss',
        '../../testing-ground.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class RadioButtonsClassicExample extends BaseExampleComponent<
    MvLibRadioButtonsClassicStyles,
    MvLibRadioButtonsClassicEffects,
    MvLibRadioButtonsClassicSettings
> {
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
        this.logProperties.set([]);
        this.styles = signal<Partial<MvLibRadioButtonsClassicStyles>>({

        });
        this.effects = signal<Partial<MvLibRadioButtonsClassicEffects>>({
            idle: ['shadow'],
            hover: ['enlarge'],
        });
        this.settings = signal<Partial<MvLibRadioButtonsClassicSettings>>({
            orientation: 'vertical',
            selectOnLabelClick: true,
            unselectable: false,
        });
    }

    protected initForm() {
    
    }
}