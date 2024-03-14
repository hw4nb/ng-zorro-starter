import { Injectable, signal } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class LayoutService {
	public config = {
		colorScheme: 'light',
	}

	public state = {
		staticMenuDesktopInactive: false,
		staticMenuMobileActive: false,
	}

	private isCollapsed$ = signal(false)

	private get isDesktop() {
		return window.innerWidth > 991
	}

	public get isCollapsed() {
		return this.isCollapsed$()
	}

	public onMenuToggle = () => {
		this.isCollapsed$.set(!this.isCollapsed)
		console.log(this.isDesktop)
		// 	if (this.isDesktop()) {
		// 		this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive
		// 	} else {
		// 		this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive

		// 		if (this.state.staticMenuMobileActive) {
		// 			this.isCollapsed$.set(false)
		// 		}
		// 	}
	}
}
