import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { MvLibShadowEffectStyle } from "mv-lib";

@Component({
  selector: 'app-shadow-effect-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './shadow-effect-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ShadowEffectInputsComponent {

  public title = input<string | undefined>(undefined);

  public enabled = input.required<boolean>();
  public style = input.required<MvLibShadowEffectStyle>();

  public onChangeEnabled = output<boolean>();
  public onChangeStyle = output<{key: string, value: any}>();
}