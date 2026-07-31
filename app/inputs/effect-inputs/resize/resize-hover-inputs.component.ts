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
    return this.part() ?
        this.effects().parts[this.part()!].classes.includes(this.component().mvLibEffects.hover.resize) :
        this.effects().classes.includes(this.component().mvLibEffects.hover.resize);
  });

  protected scalePercentage = computed(() => {
    return this.part() ?
        this.effects().parts[this.part()!].style.resizeHover.scalePercentage :
        this.effects().style.resizeHover.scalePercentage;
  });

  protected duration = computed(() => {
    return this.part() ?
        this.effects().parts[this.part()!].style.resizeHover.duration :
        this.effects().style.resizeHover.duration;
  });

  protected onChangeChecked(checked: boolean) {
    this.component().setEffect(`${this.part() ? this.part() + '.' : ''}${this.component().mvLibEffects.hover.resize}`, checked);
  }

  protected onChangeScalePercentage(value: number) {
    this.component().setEffectStyle(`${this.part() ? this.part() + '.' : ''}resizeHover.scalePercentage`, value);
  }

  protected onChangeDuration(value: string) {
    this.component().setEffectStyle(`${this.part() ? this.part() + '.' : ''}resizeHover.duration`, value);
  }
}