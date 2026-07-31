import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { CssFontSize, CssFontStyle, CssFontWeight } from "../../../css-values/font.values";
import { INPUTS } from "../../_inputs.export";
import { BaseExampleComponent } from "../../../examples/base-example.component";

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
export class FontInputsComponent<Component extends BaseExampleComponent> {

  public component = input.required<Component>();
  public part = input<string | undefined>(undefined);
  public font = input<string>('font');

  public title = input<string | undefined>(undefined);

  protected cssFontSizes = CssFontSize.values;
  protected cssFontWeights = CssFontWeight.values;
  protected cssFontStyles = CssFontStyle.values;
}