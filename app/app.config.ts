import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MV_LIB_THEMES, provideMvLibThemeConfiguration } from 'mv-lib';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideMvLibThemeConfiguration({
      themes: MV_LIB_THEMES,
      defaultTheme: 'white',
      localStorageKey: 'mv-lib-testing-ground-theme',
    }),
  ]
};
