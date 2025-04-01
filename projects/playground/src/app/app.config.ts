import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideGandam } from '../../../theme/src/public-api';
import { GANDAM_CONFIG } from './gandam.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideGandam(GANDAM_CONFIG),
  ],
};
