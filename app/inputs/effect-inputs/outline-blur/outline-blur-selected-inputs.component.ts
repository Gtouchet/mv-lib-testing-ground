import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { BaseExampleComponent } from "../../../examples/base-example.component";

@Component({
  selector: 'app-outline-blur-selected-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './outline-blur-selected-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class OutlineBlurSelectedInputsComponent<Component extends BaseExampleComponent> {

  public component = input.required<Component>();
  public title = input<string | undefined>(undefined);
  public part = input<string| undefined>(undefined);

  protected effects = computed(() => this.component().effects() as any);

  protected checked = computed(() => {
    return this.component().hasEffectClass(this.component().mvLibEffects.selected.outlineBlur.class);
  });

  protected onChangeChecked(checked: boolean) {
    this.component().setEffect(
      `${this.part() ? this.part() + '.' : ''}${this.component().mvLibEffects.selected.outlineBlur.class}`, checked
    );
  }

  protected color = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}outlineBlurSelected.color`
    );
  });

  protected onChangeColor(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}outlineBlurSelected.color`, value
    );
  }

  protected radius = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}outlineBlurSelected.radius`
    );
  });

  protected onChangeRadius(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}outlineBlurSelected.radius`, value
    );
  }
}