import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MV_LIB_THEMES, provideMvLibThemeConfiguration } from 'mv-lib';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideMvLibThemeConfiguration({
      themes: MV_LIB_THEMES,
      defaultTheme: 'Dark',
      localStorageKey: 'mv-lib-testing-ground-theme',
    }),
  ]
};
