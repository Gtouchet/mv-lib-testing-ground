import { ChangeDetectionStrategy, Component, input, model, output } from "@angular/core";
import { CssOutlineStyle } from "../../css-values/outline.values";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { InputsSeparatorComponent } from "../../inputs-separator.component";
import { MvLibComponentState, MvLibOutlineStyle } from "mv-lib";

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

  public label = input<string | undefined>(undefined);
  public value = input.required<Partial<MvLibOutlineStyle>>();

  public states = input<MvLibComponentState[]>([]);
  public state = model<MvLibComponentState | undefined>(undefined);

  public onChange = output<{key: keyof MvLibOutlineStyle, value: any, state: MvLibComponentState | undefined}>();

  protected cssOutlineStyles = CssOutlineStyle.values;

  protected emitChange(key: keyof MvLibOutlineStyle, value: any) {
    this.onChange.emit({ key, value, state: this.state() });
  }

  protected selectState(state: string) {
    this.state.set(state as MvLibComponentState);
  }
}
