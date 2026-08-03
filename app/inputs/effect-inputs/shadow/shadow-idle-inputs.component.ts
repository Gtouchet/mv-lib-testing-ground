import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { BaseExampleComponent } from "../../../examples/base-example.component";

@Component({
  selector: 'app-shadow-idle-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './shadow-idle-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ShadowIdleInputsComponent<Component extends BaseExampleComponent> {

  public component = input.required<Component>();
  public title = input<string | undefined>(undefined);
  public part = input<string| undefined>(undefined);

  protected effects = computed(() => this.component().effects() as any);

  protected checked = computed(() => {
    return this.component().hasEffectClass(this.component().mvLibEffects.idle.shadow.class);
  });

  protected onChangeChecked(checked: boolean) {
    this.component().setEffect(
      `${this.part() ? this.part() + '.' : ''}${this.component().mvLibEffects.idle.shadow.class}`, checked
    );
  }

  protected posX = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}shadowIdle.posX`
    );
  });

  protected onChangePosX(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}shadowIdle.posX`, value
    );
  }

  protected posY = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}shadowIdle.posY`
    );
  });

  protected onChangePosY(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}shadowIdle.posY`, value
    );
  }

  protected blur = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}shadowIdle.blur`
    );
  });

  protected onChangeBlur(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}shadowIdle.blur`, value
    );
  }

  protected spread = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}shadowIdle.spread`
    );
  });

  protected onChangeSpread(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}shadowIdle.spread`, value
    );
  }

  protected color = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}shadowIdle.color`
    );
  });

  protected onChangeColor(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}shadowIdle.color`, value
    );
  }
}