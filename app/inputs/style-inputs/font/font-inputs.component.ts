import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, model, output } from "@angular/core";
import { CssFontSize, CssFontStyle, CssFontWeight } from "../../css-values/font.values";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { InputsSeparatorComponent } from "../../inputs-separator.component";
import { MvLibComponentState, MvLibFontStyle } from "mv-lib";

@Component({
  selector: 'app-font-inputs',
  imports: [
    CommonModule,
    InputsSeparatorComponent,
    GENERIC_INPUTS,
  ],
  templateUrl: './font-inputs.component.html',
  styleUrl: '../style-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FontInputsComponent {

  public label = input<string | undefined>(undefined);
  public value = input.required<Partial<MvLibFontStyle>>();

  public states = input<MvLibComponentState[]>([]);
  public state = model<MvLibComponentState | undefined>(undefined);

  public onChange = output<{key: keyof MvLibFontStyle, value: any, state: MvLibComponentState | undefined}>();

  protected cssFontSizes = CssFontSize.values;
  protected cssFontWeights = CssFontWeight.values;
  protected cssFontStyles = CssFontStyle.values;

  protected emitChange(key: keyof MvLibFontStyle, value: any) {
    this.onChange.emit({ key, value, state: this.state() });
  }

  protected selectState(state: string) {
    this.state.set(state as MvLibComponentState);
  }
}
