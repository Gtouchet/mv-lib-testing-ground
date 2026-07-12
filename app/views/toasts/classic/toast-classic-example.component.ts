import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { MvLibToastService, MvLibToastStyles, MvLibToastEffects, MvLibToastSettings, MvLibButtonClassicComponent } from "mv-lib";
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

    constructor() {
        super();
        
    }

    protected initForm() {

    }
}