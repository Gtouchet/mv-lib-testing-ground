import { Component, ChangeDetectionStrategy, inject, signal, Signal } from "@angular/core";
import { MvLibToastService, MvLibButtonClassicComponent } from "mv-lib";
import { BaseExampleComponent } from '../../base-example.component';
import { CommonModule, JsonPipe } from "@angular/common";
import { INPUTS } from "../../../inputs/_inputs.export";

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

  protected success = signal({title: 'Success', icon: 'check_circle', message: 'Success message' });
  protected warning = signal({title: 'Warning', icon: 'warning', message: 'Warning message' });
  protected error = signal({title: 'Error', icon: 'error', message: 'Error message' });
  protected info = signal({title: 'Info', icon: 'info', message: 'Info message' });

  protected selectedStyleConfiguration = signal(this.getConfiguration('success'));
  protected selectedEffectConfiguration = signal(this.getConfiguration('success'));
  protected selectedSettingsConfiguration = signal(this.getConfiguration('success'));

  protected selectStyle = (type: string) => this.selectedStyleConfiguration.set(this.getConfiguration(type));
  protected selectEffect = (type: string) => this.selectedEffectConfiguration.set(this.getConfiguration(type));
  protected selectSettings = (type: string) => this.selectedSettingsConfiguration.set(this.getConfiguration(type));

  private getConfiguration(type: string) {
    const configuration = this.toastService.configuration();
    switch (type) {
      case 'success': return { type, configuration: configuration.success, localConfiguration: this.success() };
      case 'warning': return { type, configuration: configuration.warning, localConfiguration: this.warning() };
      case 'error': return { type, configuration: configuration.error, localConfiguration: this.error() };
      case 'info': return { type, configuration: configuration.info, localConfiguration: this.info() };
      default: throw new Error(`Unknown toast type: ${type}`);
    }
  }
}