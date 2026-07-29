import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { CssBorderStyle } from "../../../css-values/border.values";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs/_generic-inputs.export";
import { BaseExampleComponent } from "../../../examples/base-example.component";

@Component({
  selector: 'app-border-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './border-inputs.component.html',
  styleUrl: '../group-inputs.component.scss',
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