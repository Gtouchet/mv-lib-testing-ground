import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { CssBorderStyle } from "../../../css-values/border.values";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { BaseExampleComponent } from "../../../examples/base-example.component";
import { InputsSeparatorComponent } from "../../inputs-separator.component";

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
export class BorderInputsComponent<Component extends BaseExampleComponent> {

  public component = input.required<Component>();

  protected cssBorderStyles = CssBorderStyle.values;

  protected borderStyles = computed<string[]>(() => {
    return (this.component().styles() as any)
      .border.style
      .split(' ')
      .filter((s: []) => s.length > 0);
  });
}