import { registerLocaleData } from '@angular/common';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';

import { spinnerInterceptor } from '@src/app/core/interceptors';
import { routes } from './app.routes';
import { provideNzIcons } from './icons-provider';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		importProvidersFrom(HttpClientModule, NoopAnimationsModule),
		provideHttpClient(withInterceptors([spinnerInterceptor])),
		provideNzI18n(en_US),
		provideNzIcons(),
	],
};
