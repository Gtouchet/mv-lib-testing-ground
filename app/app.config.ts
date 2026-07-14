import { ApplicationConfig, inject, provideEnvironmentInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MvLibToastService, MvLibToastServiceConfiguration } from 'mv-lib';
import { routes } from './app.routes';

const toastServiceConfiguration: MvLibToastServiceConfiguration = {
  position: 'bottom-right',
  success: {
    styles: {
      backgroundColor: 'Green',
      textColor: 'White',
    },
  },
  warning: {
    styles: {
      backgroundColor: 'Orange',
      textColor: 'White',
    },
  },
  error: {
    styles: {
      backgroundColor: 'Red',
      textColor: 'White',
    },
    settings: {
      lifespan: 6_000,
    },
  },
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEnvironmentInitializer(() => inject(MvLibToastService).withConfiguration(toastServiceConfiguration)),
  ]
};
