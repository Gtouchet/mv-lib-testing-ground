import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CssFontSize, CssFontStyle, CssFontWeight } from "../../css-values/font.values";
import { INPUTS } from "../../_inputs.export";
import { MvLibFontStyle } from "mv-lib";

@Component({
  selector: 'app-font-inputs',
  imports: [
    CommonModule,
    INPUTS,
  ],
  templateUrl: './font-inputs.component.html',
  styleUrl: '../style-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FontInputsComponent {

  public label = input<string | undefined>(undefined);
  public value = input.required<Partial<MvLibFontStyle>>();

  public onChange = output<{key: keyof MvLibFontStyle, value: any}>();

  protected cssFontSizes = CssFontSize.values;
  protected cssFontWeights = CssFontWeight.values;
  protected cssFontStyles = CssFontStyle.values;
}