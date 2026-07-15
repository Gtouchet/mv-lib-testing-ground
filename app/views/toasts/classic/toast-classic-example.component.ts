import { Component, ChangeDetectionStrategy, inject, effect, signal } from "@angular/core";
import { MvLibToastService, MvLibToastStyles, MvLibToastEffects, MvLibToastSettings, MvLibButtonClassicComponent, MvLibToastServiceConfiguration, ToastPosition } from "mv-lib";
import { INPUTS } from "../../../shared/inputs/inputs.export";
import { BaseExampleComponent } from "../../base-example.component";

@Component({
  selector: 'app-toast-classic-example',
  imports: [
    MvLibButtonClassicComponent,
    INPUTS,
],
  templateUrl: './toast-classic-example.component.html',
  styleUrls: [
    './toast-classic-example.component.scss',
    '../../testing-ground.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ToastClassicExampleComponent extends BaseExampleComponent<
  MvLibToastStyles,
  MvLibToastEffects,
  MvLibToastSettings
> {
    protected toastService = inject(MvLibToastService);

    /**
     * Styles
     */
    protected success_backgroundColor = signal('Green');
    protected success_textColor = signal('White');
    protected success_borderColor = signal('')
    protected success_hoveredOutlineColor = signal(this.success_backgroundColor());

    protected warning_backgroundColor = signal('Orange');
    protected warning_textColor = signal('White');
    protected warning_borderColor = signal('')
    protected warning_hoveredOutlineColor = signal(this.warning_backgroundColor());

    protected error_backgroundColor = signal('Red');
    protected error_textColor = signal('White');
    protected error_borderColor = signal('')
    protected error_hoveredOutlineColor = signal(this.error_backgroundColor());

    /**
     * Effects
     */
    protected idleEffect_progressBar = signal(true);
    protected hoverEffect_hoverOutlineSolid = signal(false);
    protected hoverEffect_hoverOutlineBlur = signal(true);
    protected lifecycleEffect_fade = signal(true);
    protected lifecycleEffect_slide = signal(true);

    /**
     * Settings
     */
    protected position = signal<ToastPosition>('bottom-right');
    protected widthPx = signal(200);
    protected heightPx = signal(20);
    protected lifespan_success = signal(3_000);
    protected lifespan_warning = signal(3_000);
    protected lifespan_error = signal(6_000);

    constructor() {
        super();

    }

    protected initForm() {

    }
}