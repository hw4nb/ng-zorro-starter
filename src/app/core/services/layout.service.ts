import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LayoutService {
	private isCollapsed$ = signal(false);

	get isCollapsed() {
		return this.isCollapsed$();
	}

	public onMenuToggle = () => {
		this.isCollapsed$.set(!this.isCollapsed);
	};
}
