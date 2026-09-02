import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { MvLibTintEffectStyle } from "mv-lib";

@Component({
  selector: 'app-tint-effect-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './tint-effect-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TintEffectInputsComponent {

  public title = input<string | undefined>(undefined);

  public enabled = input.required<boolean>();
  public style = input.required<MvLibTintEffectStyle>();

  public onChangeEnabled = output<boolean>();
  public onChangeStyle = output<{key: string, value: any}>();
}