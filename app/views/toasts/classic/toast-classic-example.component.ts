import { Component, ChangeDetectionStrategy, inject, signal } from "@angular/core";
import { MvLibToastService, MvLibToastStyles, MvLibToastEffects, MvLibToastSettings, MvLibButtonClassicComponent, MvLibToastType } from "mv-lib";
import { INPUTS } from "../../../shared/inputs/inputs.export";
import { BaseExampleComponent } from "../../base-example.component";
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'app-toast-classic-example',
  imports: [
    MvLibButtonClassicComponent,
    INPUTS,
    JsonPipe,
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

    protected success = signal<{ icon: string, message: string }>({ icon: 'check_circle', message: 'Success message' });
    protected warning = signal<{ icon: string, message: string }>({ icon: 'warning', message: 'Warning message' });
    protected error = signal<{ icon: string, message: string }>({ icon: 'error', message: 'Error message' });
    protected info = signal<{ icon: string, message: string }>({ icon: 'info', message: 'Info message' });
    
    protected initForm() {

    }
}