import { Injectable, signal } from '@angular/core';

type Item = {
	text: string;
	icon: string;
	link?: string;
};

export type MenuItem = Item & {
	children?: Item[];
};

@Injectable({
	providedIn: 'root',
})
export class MenuService {
	private _menuItems$ = signal<MenuItem[]>([
		{
			text: 'Dashboard',
			icon: 'home',
			link: '/pages/dashboard',
		},
		{
			text: 'Config',
			icon: 'setting',
			children: [
				{
					text: 'Users',
					icon: 'user',
					link: '/pages/config/users',
				},
				{
					text: 'Roles',
					icon: 'audit',
					link: '/pages/config/roles',
				},
			],
		},
	]);

	get menuItems() {
		return this._menuItems$();
	}
}
