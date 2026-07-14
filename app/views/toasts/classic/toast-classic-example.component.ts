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
    protected lifespan_success = signal(3_000);
    protected lifespan_warning = signal(3_000);
    protected lifespan_error = signal(6_000);

    constructor() {
        super();

    }

    protected initForm() {

    }
}