import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from "@angular/core";
import { INPUTS } from "../../../inputs/_inputs.export";
import { CommonModule } from "@angular/common";
import { BaseExampleComponent } from "../../base-example.component";
import { MvLibGridClassicColumnComponent, MvLibGridClassicComponent, MvLibGridClassicEffects, MvLibGridClassicSettings, MvLibGridClassicStyle, MvLibGridColumnClassicStyle, MvLibGridDirectives } from "mv-lib";

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-grid-classic-example',
  imports: [
    MvLibGridClassicComponent,
    MvLibGridClassicColumnComponent,
    MvLibGridDirectives,
    INPUTS,
    CommonModule,
  ],
  templateUrl: './grid-classic-example.component.html',
  styleUrl: '../../example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GridClassicExampleComponent extends BaseExampleComponent implements AfterViewInit {

  protected grid = viewChild.required<MvLibGridClassicComponent<User>>('mvLibGridClassic');

  protected gridStyle = signal<Partial<MvLibGridClassicStyle>>({
    dimensions: {
        width: '300px',
        height: '250px',
    },
    // bodyRows: {
    //     bottomSeparatorFn: (item: User): string => `1px ${item.id % 5 === 0 ? 'solid' : 'dashed'} var(--mv-lib-effect-tertiary-color)`,
    // },
  });

  protected gridEffects = signal<Partial<MvLibGridClassicEffects>>({
    grid: {
      classes: [
        this.mvLibEffects.idle.shadow.class,
      ],
    },
  });
  
  protected gridSettings = signal<Partial<MvLibGridClassicSettings>>({
      
  });

  protected selectedColumn = signal(0);

  protected columnsStyles = signal<Partial<MvLibGridColumnClassicStyle>[]>([
    {
      widthForce: 1,
      // bodyCells: {
      //     backgroundColorFn: (item: User): string => `var(--mv-lib-secondary-color-${item.id % 2 === 0 ? '5' : '4'})`,
      // },
    },
    {
      widthForce: 4,
    },
  ]);

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
    { id: 10, name: 'Jack' },
    { id: 11, name: 'Karen' },
    { id: 12, name: 'Leo' },
    { id: 13, name: 'Mia' },
    { id: 14, name: 'Nora' },
    { id: 15, name: 'Oscar' },
    { id: 16, name: 'Paul' },
    { id: 17, name: 'Quinn' },
    { id: 18, name: 'Ruby' },
    { id: 19, name: 'Sara' },
    { id: 20, name: 'Tom' },
  ]);

  ngAfterViewInit() {
    this.selectedPartStyle.set('grid');
    this.selectedPartEffects.set('grid');
    this.selectedPartSettings.set('grid');
    this.logProperties = [
      { property: 'inputStyle', value: () => this.grid().getStyle() },
      { property: 'inputEffects', value: () => this.grid().getEffects() },
      { property: 'inputSettings', value: () => this.grid().getSettings() },
    ];
    this.refreshLog();
  }
}