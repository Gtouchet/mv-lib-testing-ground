import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { MvLibRippleEffectStyle } from "mv-lib";

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

  public title = input<string | undefined>(undefined);

  public enabled = input.required<boolean>();
  public style = input.required<MvLibRippleEffectStyle>();

  public onChangeEnabled = output<boolean>();
  public onChangeStyle = output<{key: string, value: any}>();
}