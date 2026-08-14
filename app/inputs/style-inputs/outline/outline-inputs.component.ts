import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { CssOutlineStyle } from "../../css-values/outline.values";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { InputsSeparatorComponent } from "../../inputs-separator.component";
import { MvLibOutlineStyle } from "mv-lib";

@Component({
  selector: 'app-outline-inputs',
  imports: [
    CommonModule,
    InputsSeparatorComponent,
    GENERIC_INPUTS,
  ],
  templateUrl: './outline-inputs.component.html',
  styleUrl: '../style-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class OutlineInputsComponent {

  public title = input<string | undefined>(undefined);

  public outline = input.required<Partial<MvLibOutlineStyle>>();

  public onChangeOutline = output<{key: string, value: any}>();

  // protected outlineStyle = computed(() => {
  //   const style = this.outline().style ?? 'none none none none';
  //   const parts = style.split(/\s+/).filter(Boolean);
  //   while (parts.length < 4) {
  //     parts.push('none');
  //   }
  //   return parts.slice(0, 4);
  // });

  // protected updateOutlineStyle(index: number, value: string): void {
  //   const parts = [...this.outlineStyle()];
  //   parts[index] = value;
  //   this.onChangeOutline.emit({ key: 'style', value: parts.join(' ') });
  // }

  protected cssOutlineStyles = CssOutlineStyle.values;
}