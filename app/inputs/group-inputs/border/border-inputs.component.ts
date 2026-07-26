import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { CssBorderStyle } from "../../../css-values/border.values";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs/_generic-inputs.export";

@Component({
  selector: 'app-border-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './border-inputs.component.html',
  styleUrls: [
    './border-inputs.component.scss',
    '../group-inputs.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BorderInputsComponent {

    protected cssBorderStyles = CssBorderStyle.values;

    public width = input<string>();
    public style = input<string>();
    public color = input<string>();
    public radius = input<string>();

    public onWidthChange = output<string>();
    public onStyleChange = output<string>();
    public onColorChange = output<string>();
    public onRadiusChange = output<string>();

    protected borderStyles = computed<string[]>(() => {
      return !this.style() ? [] : this.style()!.split(' ').filter(s => s.length > 0);
    });
}