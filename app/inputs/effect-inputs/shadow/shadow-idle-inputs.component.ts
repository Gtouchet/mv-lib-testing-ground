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
    return this.part() ?
      this.effects().parts[this.part()!].classes.includes(this.component().mvLibEffects.idle.shadow) :
      this.effects().classes.includes(this.component().mvLibEffects.idle.shadow);
  });

  protected posX = computed(() => {
    return this.part() ?
      this.effects().parts[this.part()!].style.shadowIdle.posX :
      this.effects().style.shadowIdle.posX;
  });

  protected posY = computed(() => {
    return this.part() ?
      this.effects().parts[this.part()!].style.shadowIdle.posY :
      this.effects().style.shadowIdle.posY;
  });

  protected blur = computed(() => {
    return this.part() ?
      this.effects().parts[this.part()!].style.shadowIdle.blur :
      this.effects().style.shadowIdle.blur;
  });

  protected spread = computed(() => {
    return this.part() ?
      this.effects().parts[this.part()!].style.shadowIdle.spread :
      this.effects().style.shadowIdle.spread;
  });

  protected color = computed(() => {
    return this.part() ?
      this.effects().parts[this.part()!].style.shadowIdle.color :
      this.effects().style.shadowIdle.color;
  });

  protected onChangeChecked(checked: boolean) {
    this.component().setEffect(`${this.part() ? this.part() + '.' : ''}${this.component().mvLibEffects.idle.shadow}`, checked);
  }

  protected onChangePosX(value: string) {
    this.component().setEffectStyle(`${this.part() ? this.part() + '.' : ''}shadowIdle.posX`, value);
  }

  protected onChangePosY(value: string) {
    this.component().setEffectStyle(`${this.part() ? this.part() + '.' : ''}shadowIdle.posY`, value);
  }

  protected onChangeBlur(value: string) {
    this.component().setEffectStyle(`${this.part() ? this.part() + '.' : ''}shadowIdle.blur`, value);
  }

  protected onChangeSpread(value: string) {
    this.component().setEffectStyle(`${this.part() ? this.part() + '.' : ''}shadowIdle.spread`, value);
  }

  protected onChangeColor(value: string) {
    this.component().setEffectStyle(`${this.part() ? this.part() + '.' : ''}shadowIdle.color`, value);
  }
}