import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs/_generic-inputs.export";
import { BaseExampleComponent } from "../../../examples/base-example.component";

@Component({
  selector: 'app-dimensions-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './dimensions-inputs.component.html',
  styleUrl: '../group-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DimensionsInputsComponent<Component extends BaseExampleComponent> {

  public component = input.required<Component>();
}