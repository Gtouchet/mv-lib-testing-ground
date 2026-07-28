import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs/_generic-inputs.export";

@Component({
  selector: 'app-shadow-hover-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './shadow-hover-inputs.component.html',
  styleUrls: [
    './shadow-hover-inputs.component.scss',
    '../effect-inputs.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ShadowHoverInputsComponent {

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