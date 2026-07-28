import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs/_generic-inputs.export";

@Component({
  selector: 'app-ripple-release-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './ripple-release-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RippleReleaseInputsComponent {

    public enabled = input<boolean>();
    public originX = input<string>();
    public originY = input<string>();
    public size = input<string>();
    public delay = input<string>();

    public onEnabledChange = output<boolean>();
    public onOriginXChange = output<string>();
    public onOriginYChange = output<string>();
    public onSizeChange = output<string>();
    public onDelayChange = output<string>();
}