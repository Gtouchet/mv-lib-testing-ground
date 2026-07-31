import { Component, ChangeDetectionStrategy, inject, signal } from "@angular/core";
import { MvLibToastService, MvLibButtonClassicComponent } from "mv-lib";
import { BaseExampleComponent } from '../../base-example.component';
import { CommonModule, JsonPipe } from "@angular/common";
import { INPUTS } from "../../../inputs/_inputs.export";

interface LocalToastConfiguration {
    title: string;
    icon: string;
    message: string;
}

@Component({
  selector: 'app-toast-classic-example',
  imports: [
    MvLibButtonClassicComponent,
    JsonPipe,
    INPUTS,
    CommonModule,
],
  templateUrl: './toast-classic-example.component.html',
  styleUrl: '../../example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ToastClassicExampleComponent extends BaseExampleComponent {

  protected toastService = inject(MvLibToastService);

  protected success = signal<LocalToastConfiguration>({ title: 'Success', icon: 'check_circle', message: 'Success message' });
  protected warning = signal<LocalToastConfiguration>({ title: 'Warning', icon: 'warning', message: 'Warning message' });
  protected error = signal<LocalToastConfiguration>({ title: 'Error', icon: 'error', message: 'Error message' });
  protected info = signal<LocalToastConfiguration>({ title: 'Info', icon: 'info', message: 'Info message' });
}