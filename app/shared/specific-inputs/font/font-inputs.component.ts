import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output, signal } from "@angular/core";
import { INPUTS } from "../../generic-inputs/_generic-inputs.export";
import { CssFontSize, CssFontStyle, CssFontWeight } from "../../css-values/font.values";

@Component({
  selector: 'app-font-inputs',
  imports: [
    CommonModule,
    INPUTS,
  ],
  templateUrl: './font-inputs.component.html',
  styleUrl: './font-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FontInputsComponent {

    protected cssFontSizes = CssFontSize.values;
    protected cssFontWeights = CssFontWeight.values;
    protected cssFontStyles = CssFontStyle.values;
    
    public size = input<number | string>();
    public weight = input<string>();
    public style = input<string>();
    public color = input<string>();

    public onSizeChange = output<number | string>();
    public onWeightChange = output<string>();
    public onStyleChange = output<string>();
    public onColorChange = output<string>();
}