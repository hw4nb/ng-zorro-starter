import { Component } from '@angular/core'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSiderComponent } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'

const NG_ZORRO = [NzSiderComponent, NzMenuModule, NzIconModule, NzDropDownModule]

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [...NG_ZORRO],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
	public isCollapsed = false
}
