import { ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline
} from '@ant-design/icons-angular/icons';

import { routes } from './app.routes';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
import { AuthInterceptor } from './core/auth/auth.interceptor';

registerLocaleData(es);

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    provideNzIcons(icons),
    provideNzI18n(es_ES),
  ]};
