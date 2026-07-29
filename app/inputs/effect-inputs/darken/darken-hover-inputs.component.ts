import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs/_generic-inputs.export";
import { BaseExampleComponent } from "../../../examples/base-example.component";

@Component({
  selector: 'app-darken-hover-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './darken-hover-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DarkenHoverInputsComponent<Component extends BaseExampleComponent> {

  public component = input.required<Component>();
}