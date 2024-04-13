import { Routes } from '@angular/router';
import { RolesComponent } from '@src/app/pages/config/components/roles/roles.component';
import { UsersComponent } from '@src/app/pages/config/components/users/users.component';
import { ConfigComponent } from '@src/app/pages/config/config.component';

export const CONFIG_ROUTES: Routes = [
	{
		path: '',
		component: ConfigComponent,
		children: [
			{
				path: 'users',
				component: UsersComponent,
			},
			{
				path: 'roles',
				component: RolesComponent,
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'users',
			},
		],
	},
];
