import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MvLibBorderSolidEffectStyle } from "mv-lib";
import { GENERIC_INPUTS } from "../../generic-inputs.export";

@Component({
  selector: 'app-border-solid-effect-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './border-solid-effect-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BorderSolidEffectInputsComponent {

  public title = input<string | undefined>(undefined);

  public enabled = input.required<boolean>();
  public style = input.required<MvLibBorderSolidEffectStyle>();

  public onChangeEnabled = output<boolean>();
  public onChangeStyle = output<{key: string, value: any}>();
}