import { Routes } from '@angular/router'
import { MainComponent } from '@src/app/pages/dashboard/components/main/main.component'
import { DashboardComponent } from '@src/app/pages/dashboard/dashboard.component'

export const DASHBOARD_ROUTES: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [
			{
				path: '',
				component: MainComponent,
			},
		],
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'dashboard',
	},
]
