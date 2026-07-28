import { Component, ChangeDetectionStrategy, inject, signal } from "@angular/core";
import { MvLibToastService, MvLibButtonClassicComponent, MvLibToastClassicComponent } from "mv-lib";
import { BaseExampleComponent } from "../../base-example.component";
import { JsonPipe } from "@angular/common";
import { INPUTS } from "../../../inputs/inputs.export";

@Component({
  selector: 'app-toast-classic-example',
  imports: [
    MvLibButtonClassicComponent,
    JsonPipe,
    INPUTS,
],
  templateUrl: './toast-classic-example.component.html',
  styleUrls: [
    './toast-classic-example.component.scss',
    '../../example.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ToastClassicExampleComponent extends BaseExampleComponent {

    protected toastService = inject(MvLibToastService);

    protected success = signal<{ icon: string, message: string }>({ icon: 'check_circle', message: 'Success message' });
    protected warning = signal<{ icon: string, message: string }>({ icon: 'warning', message: 'Warning message' });
    protected error = signal<{ icon: string, message: string }>({ icon: 'error', message: 'Error message' });
    protected info = signal<{ icon: string, message: string }>({ icon: 'info', message: 'Info message' });
}