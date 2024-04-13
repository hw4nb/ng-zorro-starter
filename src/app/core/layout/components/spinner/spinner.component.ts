import { Component, inject } from '@angular/core';

import { SpinnerService } from '@src/app/core/services';

@Component({
	selector: 'app-spinner',
	standalone: true,
	imports: [],
	templateUrl: './spinner.component.html',
	styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
	private _loader = inject(SpinnerService);

	get getLoading() {
		return this._loader.getStatusSpinner;
	}
}
