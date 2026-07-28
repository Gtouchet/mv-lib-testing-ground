import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs/_generic-inputs.export";

@Component({
  selector: 'app-outline-blur-selected-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './outline-blur-selected-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class OutlineBlurSelectedInputsComponent {

    public enabled = input<boolean>();
    public color = input<string>();
    public radius = input<string>();

    public onEnabledChange = output<boolean>();
    public onColorChange = output<string>();
    public onRadiusChange = output<string>();
}