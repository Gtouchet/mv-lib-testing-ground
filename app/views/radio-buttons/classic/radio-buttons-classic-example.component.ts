import { ChangeDetectionStrategy, Component, contentChild, inject, signal } from "@angular/core";
import { BaseExampleComponent } from "../../base-example.component";
import { MvLibRadioButtonsClassicComponent, MvLibRadioButtonsClassicEffects, MvLibRadioButtonsClassicSettings, MvLibRadioButtonsClassicStyles, MvLibRadioButtonsDirectives } from "mv-lib";
import { INPUTS } from "../../../shared/inputs/inputs.export";
import { StylesService } from "../../../../styles/styles.service";
import { JsonPipe } from "@angular/common";

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
    protected radioButtons = contentChild('radioButtons');

    protected appStyles = inject(StylesService);
  
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
        this.logProperties.set(['disabled', 'styles', 'effects', 'settings']);
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

    protected initForm() {
    
    }
}