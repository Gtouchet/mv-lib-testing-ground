import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { MvLibProgressBarDarkenEffectStyle } from "mv-lib";

@Component({
  selector: 'app-progress-bar-darken-fill-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './progress-bar-darken-fill-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ProgressBarDarkenFillInputsComponent {

  public title = input<string | undefined>(undefined);

  public enabled = input.required<boolean>();
  public style = input.required<MvLibProgressBarDarkenEffectStyle>();

  public onChangeEnabled = output<boolean>();
  public onChangeStyle = output<{key: string, value: any}>();
}