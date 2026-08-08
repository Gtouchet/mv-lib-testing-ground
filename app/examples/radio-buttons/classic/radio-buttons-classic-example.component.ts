import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { BaseExampleComponent } from '../../base-example.component';
import { CommonModule, JsonPipe } from "@angular/common";
import { INPUTS } from "../../../inputs/_inputs.export";
import { MvLibRadioButtonsClassicAnimations, MvLibRadioButtonsClassicComponent, MvLibRadioButtonsClassicEffects, MvLibRadioButtonsClassicSettings, MvLibRadioButtonsClassicStyle, MvLibRadioButtonsDirectives } from "mv-lib";

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
export class RadioButtonsClassicExampleComponent extends BaseExampleComponent implements AfterViewInit {

    protected radioButtons = viewChild.required<MvLibRadioButtonsClassicComponent<User>>('mvLibRadioButtonsClassic');

    protected style = signal<Partial<MvLibRadioButtonsClassicStyle>>({
        groupGap: '6px',
        contentGap: '6px',
        size: '16px',
    });

    protected effects = signal<Partial<MvLibRadioButtonsClassicEffects>>({
        classes: [
            this.mvLibEffects.idle.shadow.class,
            this.mvLibEffects.hover.resize.class,
        ],
    });

    protected animations = signal<Partial<MvLibRadioButtonsClassicAnimations>>({

    });
    
    protected settings = signal<Partial<MvLibRadioButtonsClassicSettings>>({
        orientation: 'vertical',
        selectOnLabelClick: true,
        deselectable: false,
    });

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

    ngAfterViewInit() {
        this.logProperties = [
            { property: 'style', value: () => this.radioButtons().getStyle() },
            { property: 'effects', value: () => this.radioButtons().getEffects() },
            { property: 'settings', value: () => this.radioButtons().getSettings() },
            { property: 'disabled', value: this.disabled },
        ];
        this.refreshLog();
    }
}