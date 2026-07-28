import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs/_generic-inputs.export";

@Component({
  selector: 'app-shadow-idle-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './shadow-idle-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ShadowIdleInputsComponent {

    public enabled = input<boolean>();
    public shadowX = input<string>();
    public shadowY = input<string>();
    public blur = input<string>();
    public spread = input<string>();
    public color = input<string>();

    public onEnabledChange = output<boolean>();
    public onShadowXChange = output<string>();
    public onShadowYChange = output<string>();
    public onBlurChange = output<string>();
    public onSpreadChange = output<string>();
    public onColorChange = output<string>();
}