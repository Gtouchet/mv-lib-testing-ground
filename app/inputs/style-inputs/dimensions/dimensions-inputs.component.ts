import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { InputsSeparatorComponent } from "../../inputs-separator.component";
import { MvLibDimensionStyle } from "mv-lib";

@Component({
  selector: 'app-dimensions-inputs',
  imports: [
    CommonModule,
    InputsSeparatorComponent,
    GENERIC_INPUTS,
  ],
  templateUrl: './dimensions-inputs.component.html',
  styleUrl: '../style-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DimensionsInputsComponent {

  public title = input<string | undefined>(undefined);

  public dimensions = input.required<Partial<MvLibDimensionStyle>>();

  public onChangeDimensions = output<{key: string, value: any}>();
}