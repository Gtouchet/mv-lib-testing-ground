import { Component, ChangeDetectionStrategy, inject, signal } from "@angular/core";
import { MvLibToastService, MvLibToastStyles, MvLibToastEffects, MvLibToastSettings, MvLibButtonClassicComponent, ToastPosition } from "mv-lib";
import { INPUTS } from "../../../shared/inputs/inputs.export";
import { BaseExampleComponent } from "../../base-example.component";

interface ExampleToastConfiguration {
  forcedWidthPx?: number;
  forcedHeightPx?: number;
  icon?: string;
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  hoveredOutlineColor?: string;
}

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
    protected successConfiguration = signal<ExampleToastConfiguration>({
      forcedWidthPx: undefined,
      forcedHeightPx: undefined,
      icon: 'check_circle',
      text: 'Success',
      backgroundColor: 'Green',
      textColor: 'White',
      borderColor: '',
      hoveredOutlineColor: 'Green',
    });
    protected warningConfiguration = signal<ExampleToastConfiguration>({
      forcedWidthPx: undefined,
      forcedHeightPx: undefined,
      icon: 'warning',
      text: 'Warning',
      backgroundColor: 'Orange',
      textColor: 'White',
      borderColor: '',
      hoveredOutlineColor: 'Orange',
    });
    protected errorConfiguration = signal<ExampleToastConfiguration>({
      forcedWidthPx: undefined,
      forcedHeightPx: undefined,
      icon: 'error',
      text: 'Error',
      backgroundColor: 'Red',
      textColor: 'White',
      borderColor: '',
      hoveredOutlineColor: 'Red',
    });
    protected infoConfiguration = signal<ExampleToastConfiguration>({
      forcedWidthPx: undefined,
      forcedHeightPx: undefined,
      icon: 'info',
      text: 'Info',
      backgroundColor: 'SkyBlue',
      textColor: 'Black',
      borderColor: '',
      hoveredOutlineColor: 'SkyBlue',
    });

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
    protected lifespan_info = signal(3_000);

    protected initForm() {

    }
}