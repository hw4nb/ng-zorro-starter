import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SidebarComponent } from '@src/app/core/layout/components/sidebar/sidebar.component'
import { SpinnerComponent } from '@src/app/core/layout/components/spinner/spinner.component'
import { LayoutService } from '@src/app/core/services/layout.service'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

const NG_ZORRO = [
	NzLayoutModule,
	NzIconModule,
	NzMenuModule,
	NzAvatarModule,
	NzDropDownModule,
	NzTypographyModule,
	NzNoAnimationModule,
]

const COMPONENTS = [SpinnerComponent, SidebarComponent]

type Item = {
	title: string
	icon: string
  path?: string
}

type MenuItem = Item & {
	children?: Item[]
}

@Component({
	selector: 'app-layout',
	standalone: true,
	imports: [RouterModule, ...NG_ZORRO, ...COMPONENTS],
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
	public menuItems: MenuItem[] = [
		{
			title: 'Dashboard',
			icon: 'home',
      path: 'dashboard',
		},
		{
			title: 'User',
			icon: 'user',
			children: [
				{
					title: 'Tom',
					icon: 'user',
				},
				{
					title: 'Bill',
					icon: 'user',
				},
			],
		},
{
			title: 'Team',
			icon: 'team',
			children: [
				{
					title: 'Team 1',
					icon: 'team',
				},
				{
					title: 'Team 2',
					icon: 'team',
				},
			],
		},
		{
			title: 'Setting',
			icon: 'setting',
			children: [
				{
					title: 'Setting 1',
					icon: 'setting',
				},
				{
					title: 'Setting 2',
					icon: 'setting',
				},
			],
		},
	]

	public _layoutService = inject(LayoutService)

	public get isCollapsed() {
		return this._layoutService.isCollapsed
	}

	public onMenuToggle = () => {
		this._layoutService.onMenuToggle()
	}

	public onLogout = () => {
		console.log('Logout')
	}
}
