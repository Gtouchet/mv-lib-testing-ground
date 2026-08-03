import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { BaseExampleComponent } from "../../../examples/base-example.component";

@Component({
  selector: 'app-ripple-release-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './ripple-release-inputs.component.html',
  styleUrl: '../effect-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RippleReleaseInputsComponent<Component extends BaseExampleComponent> {

  public component = input.required<Component>();
  public title = input<string | undefined>(undefined);
  public part = input<string| undefined>(undefined);

  protected effects = computed(() => this.component().effects() as any);

  protected checked = computed(() => {
    return this.component().hasEffectClass(this.component().mvLibEffects.release.ripple.class);
  });

  protected onChangeChecked(checked: boolean) {
    this.component().setEffect(
      `${this.part() ? this.part() + '.' : ''}${this.component().mvLibEffects.release.ripple.class}`, checked
    );
  }

  protected originX = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}rippleRelease.originX`
    );
  });

  protected onChangeOriginX(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}rippleRelease.originX`, value
    );
  }

  protected originY = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}rippleRelease.originY`
    );
  });

  protected onChangeOriginY(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}rippleRelease.originY`, value
    );
  }

  protected size = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}rippleRelease.size`
    );
  });

  protected onChangeSize(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}rippleRelease.size`, value
    );
  }

  protected delay = computed(() => {
    return this.component().getSpecificEffectStyle(
      `${this.part() ? this.part() + '.' : ''}rippleRelease.delay`
    );
  });

  protected onChangeDelay(value: string) {
    this.component().setEffectStyle(
      `${this.part() ? this.part() + '.' : ''}rippleRelease.delay`, value
    );
  }
}