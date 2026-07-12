import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MvLibToast } from 'mv-lib';

@Component({
  selector: 'app-toast-success-template',
  templateUrl: './toast-success-template.component.html',
  styleUrl: './toast-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ToastSuccessTemplateComponent {
  public toast = input.required<MvLibToast>();
  public dismiss = input.required<() => void>();
}

@Component({
  selector: 'app-toast-warning-template',
  templateUrl: './toast-warning-template.component.html',
  styleUrl: './toast-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ToastWarningTemplateComponent {
  public toast = input.required<MvLibToast>();
  public dismiss = input.required<() => void>();
}

@Component({
  selector: 'app-toast-error-template',
  templateUrl: './toast-error-template.component.html',
  styleUrl: './toast-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ToastErrorTemplateComponent {
  public toast = input.required<MvLibToast>();
  public dismiss = input.required<() => void>();
}
