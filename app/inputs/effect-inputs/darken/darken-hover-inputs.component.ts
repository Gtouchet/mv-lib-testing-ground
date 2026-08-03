import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { BaseExampleComponent } from "../../../examples/base-example.component";

@Component({
  selector: 'app-darken-hover-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './darken-hover-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DarkenHoverInputsComponent<Component extends BaseExampleComponent> {

  public component = input.required<Component>();
  public title = input<string | undefined>(undefined);
  public part = input<string| undefined>(undefined);

  protected effects = computed(() => this.component().effects() as any);

  protected checked = computed(() => {
    return this.component().hasEffectClass(this.component().mvLibEffects.hover.darken.class);
  });

  protected onChangeChecked(checked: boolean) {
    this.component().setEffect(
      `${this.part() ? this.part() + '.' : ''}${this.component().mvLibEffects.hover.darken.class}`, checked
    );
  }

  protected effectPercentage = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}darkenHover.effectPercentage`
    );
  });

  protected onChangeEffectPercentage(value: number) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}darkenHover.effectPercentage`, value
    );
  }
}