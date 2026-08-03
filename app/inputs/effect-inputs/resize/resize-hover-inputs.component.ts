import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { BaseExampleComponent } from "../../../examples/base-example.component";

@Component({
  selector: 'app-resize-hover-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './resize-hover-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ResizeHoverInputsComponent<Component extends BaseExampleComponent> {

  public component = input.required<Component>();
  public title = input<string | undefined>(undefined);
  public part = input<string| undefined>(undefined);

  protected effects = computed(() => this.component().effects() as any);

  protected checked = computed(() => {
    return this.component().hasEffectClass(this.component().mvLibEffects.hover.resize.class);
  });

  protected onChangeChecked(checked: boolean) {
    this.component().setEffect(
      `${this.part() ? this.part() + '.' : ''}${this.component().mvLibEffects.hover.resize.class}`, checked
    );
  }

  protected scalePercentage = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}resizeHover.scalePercentage`
    );
  });

  protected onChangeScalePercentage(value: number) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}resizeHover.scalePercentage`, value
    );
  }

  protected duration = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}resizeHover.duration`
    );
  });

  protected onChangeDuration(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}resizeHover.duration`, value
    );
  }
}