import { Routes } from '@angular/router';
import { LayoutComponent } from '@src/app/core/layout/layout.component';

export const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () => import('./core/auth/auth.routes').then((m) => m.AUTH_ROUTES),
	},
	{
		path: 'pages',
		component: LayoutComponent,
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('./pages/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
			},
			{
				path: 'config',
				loadChildren: () => import('./pages/config/config.routes').then((m) => m.CONFIG_ROUTES),
			},
			{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
			{ path: '**', redirectTo: 'dashboard' },
		],
	},
	{ path: '', pathMatch: 'full', redirectTo: 'pages' },
	{ path: '**', redirectTo: 'pages' },
];
