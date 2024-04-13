import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { SpinnerComponent } from '@src/app/core/layout/components/spinner/spinner.component';
import { AuthService, LayoutService, MenuItem, MenuService } from '@src/app/core/services';

const NG_ZORRO_MODULES = [
	NzLayoutModule,
	NzIconModule,
	NzMenuModule,
	NzAvatarModule,
	NzDropDownModule,
	NzTypographyModule,
];

const COMPONENTS = [SpinnerComponent];

@Component({
	selector: 'app-layout',
	standalone: true,
	imports: [RouterOutlet, RouterLink, ...NG_ZORRO_MODULES, ...COMPONENTS],
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
	private _authService = inject(AuthService);
	private _layoutService = inject(LayoutService);
	private _menuService = inject(MenuService);
	private _router = inject(Router);

	public menuItems = signal<MenuItem[]>([]);

	constructor() {
		this.menuItems.set(this._menuService.menuItems);
	}

	get isCollapsed() {
		return this._layoutService.isCollapsed;
	}

	public isSelected = (route: string | undefined) => {
		return route === this._router.url;
	};

	public isSelectedChildMenu = (item: MenuItem) => {
		if (!item.children) return false;
		return item.children.some((child) => this.isSelected(child.link));
	};

	public navigateTo = (link: string | undefined) => {
		if (!link) return;
		this._router.navigateByUrl(link);
	};

	public onMenuToggle = () => {
		this._layoutService.onMenuToggle();
	};

	public onLogout = () => {
		this._authService.logout();
	};
}
