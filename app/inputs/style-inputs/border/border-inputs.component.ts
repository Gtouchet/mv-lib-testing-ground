import { ChangeDetectionStrategy, Component, input, output, signal } from "@angular/core";
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
  
  protected borderStyle = signal<string[]>(['solid', 'solid', 'solid', 'solid']);

  protected cssBorderStyles = CssBorderStyle.values;
}