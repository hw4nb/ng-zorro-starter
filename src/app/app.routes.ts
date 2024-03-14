import { Routes } from '@angular/router'
import { LayoutComponent } from '@src/app/core/layout/layout.component'

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/pages' },
	{
		path: 'auth',
		loadChildren: () => import('./core/auth/auth.routes').then((m) => m.AUTH_ROUTES),
	},
	{
		path: 'pages',
		component: LayoutComponent,
		loadChildren: () => import('./pages/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
	},
]
