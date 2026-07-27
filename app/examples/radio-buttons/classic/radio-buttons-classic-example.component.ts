import { ChangeDetectionStrategy, Component, contentChild, signal } from "@angular/core";
import { BaseExampleComponent } from "../../base-example.component";
import { MvLibRadioButtonsClassicComponent, MvLibRadioButtonsClassicEffects, MvLibRadioButtonsClassicEffectsStyles, MvLibRadioButtonsClassicSettings, MvLibRadioButtonsClassicStyles, MvLibRadioButtonsDirectives } from "mv-lib";
import { JsonPipe } from "@angular/common";
import { INPUTS } from "../../../inputs/inputs.export";

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
        JsonPipe,
    ],
    templateUrl: './radio-buttons-classic-example.component.html',
    styleUrls: [
        './radio-buttons-classic-example.component.scss',
        '../../example.component.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class RadioButtonsClassicExampleComponent extends BaseExampleComponent<
    MvLibRadioButtonsClassicStyles,
    MvLibRadioButtonsClassicEffects,
    MvLibRadioButtonsClassicEffectsStyles,
    MvLibRadioButtonsClassicSettings
> {
    override mvLibComponent = contentChild<MvLibRadioButtonsClassicComponent<User>>('mvLibComponent');

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
        this.styles = signal<Partial<MvLibRadioButtonsClassicStyles>>({
            sizePx: 16,
            backgroundColor: this.appStyles.var('radio-buttons-classic-background-color'),
            selectedBackgroundColor: this.appStyles.var('radio-buttons-classic-selected-background-color'),

            groupGapPx: 4,
            contentGapPx: 6,
        });
        this.effects = signal<Partial<MvLibRadioButtonsClassicEffects>>({
            idle: ['shadow'],
            hover: ['enlarge'],
            selected: [],
        });
        this.settings = signal<Partial<MvLibRadioButtonsClassicSettings>>({
            orientation: 'vertical',
            selectOnLabelClick: true,
            unselectable: false,
        });
    }
}