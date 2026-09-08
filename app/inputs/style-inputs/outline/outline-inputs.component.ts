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

  protected cssOutlineStyles = CssOutlineStyle.values;
}