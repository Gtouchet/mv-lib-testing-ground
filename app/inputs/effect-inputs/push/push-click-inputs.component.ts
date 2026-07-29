import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs/_generic-inputs.export";
import { BaseExampleComponent } from "../../../examples/base-example.component";

@Component({
  selector: 'app-push-click-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './push-click-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PushClickInputsComponent<Component extends BaseExampleComponent> {

  public component = input.required<Component>();
}