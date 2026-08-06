import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { CssBorderStyle } from "../../../css-values/border.values";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { InputsSeparatorComponent } from "../../inputs-separator.component";
import { MvLibBorderStyle } from "mv-lib";

@Component({
  selector: 'app-border-inputs',
  imports: [
    CommonModule,
    InputsSeparatorComponent,
    GENERIC_INPUTS,
  ],
  templateUrl: './border-inputs.component.html',
  styleUrl: '../style-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BorderInputsComponent {

  public title = input<string | undefined>(undefined);

  public border = input.required<Partial<MvLibBorderStyle>>();

  public onChangeBorder = output<{key: string, value: any}>();

  protected borderStyle = computed(() => {
    const style = this.border().style ?? 'none none none none';
    const parts = style.split(/\s+/).filter(Boolean);
    while (parts.length < 4) {
      parts.push('none');
    }
    return parts.slice(0, 4);
  });

  protected updateBorderStyle(index: number, value: string): void {
    const parts = [...this.borderStyle()];
    parts[index] = value;
    this.onChangeBorder.emit({ key: 'style', value: parts.join(' ') });
  }

  protected cssBorderStyles = CssBorderStyle.values;
}