import { ApplicationConfig, inject, provideEnvironmentInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MvLibToastService, MvLibToastServiceConfiguration } from 'mv-lib';
import { routes } from './app.routes';
//import { ToastSuccessTemplateComponent, ToastWarningTemplateComponent, ToastErrorTemplateComponent } from './shared/toast-templates/toasts.components';

const toastServiceConfiguration: MvLibToastServiceConfiguration = {
  success: {
    styles: {
      backgroundColor: 'Green',
      textColor: 'White',
      hoveredOutlineColor: 'Green',
    },
    effects: {

    },
    settings: {
      lifespan: 3_000,
    },
    //templateComponent: ToastSuccessTemplateComponent,
  },
  warning: {
    styles: {
      backgroundColor: 'Orange',
      textColor: 'White',
      hoveredOutlineColor: 'Orange',
    },
    effects: {
      
    },
    settings: {
      lifespan: 3_000,
    },
    //templateComponent: ToastWarningTemplateComponent,
  },
  error: {
    styles: {
      backgroundColor: 'Red',
      textColor: 'White',
      hoveredOutlineColor: 'Red',
    },
    effects: {
      
    },
    settings: {
      lifespan: 6_000,
    },
    //templateComponent: ToastErrorTemplateComponent,
  },
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEnvironmentInitializer(() => inject(MvLibToastService).configuration.set(toastServiceConfiguration)),
  ]
};
