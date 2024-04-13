import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private _router = inject(Router);

	public login = () => {
		this._router.navigateByUrl('/pages');
	};

	public logout = () => {
		this._router.navigateByUrl('/auth');
	};
}
