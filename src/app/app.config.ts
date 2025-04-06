import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideEnvironmentNgxMask} from "ngx-mask";
import { provideHttpClient} from '@angular/common/http';

// TODO: add recaptcha when this app runs from a webhost.

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideEnvironmentNgxMask(),
    provideHttpClient()

  ]
};
