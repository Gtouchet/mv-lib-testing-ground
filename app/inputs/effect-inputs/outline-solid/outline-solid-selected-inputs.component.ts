import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { BaseExampleComponent } from "../../../examples/base-example.component";

@Component({
  selector: 'app-outline-solid-selected-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './outline-solid-selected-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class OutlineSolidSelectedInputsComponent<Component extends BaseExampleComponent> {

  public component = input.required<Component>();
  public title = input<string | undefined>(undefined);
  public part = input<string| undefined>(undefined);

  protected effects = computed(() => this.component().effects() as any);

  protected checked = computed(() => {
    return this.component().hasEffectClass(this.component().mvLibEffects.selected.outlineSolid.class);
  });

  protected onChangeChecked(checked: boolean) {
    this.component().setEffect(
      `${this.part() ? this.part() + '.' : ''}${this.component().mvLibEffects.selected.outlineSolid.class}`, checked
    );
  }

  protected color = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}outlineSolidSelected.color`
    );
  });

  protected onChangeColor(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}outlineSolidSelected.color`, value
    );
  }

  protected width = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}outlineSolidSelected.width`
    );
  });

  protected onChangeWidth(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}outlineSolidSelected.width`, value
    );
  }
}