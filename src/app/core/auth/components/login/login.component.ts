import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import { AuthService } from '@src/app/core/services';

const NG_ZORRO_MODULES = [NzFormModule, NzInputModule, NzButtonModule, NzCheckboxModule];

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [ReactiveFormsModule, ...NG_ZORRO_MODULES],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent {
	private _fb = inject(FormBuilder);
	private _authService = inject(AuthService);

	public validateForm: FormGroup = this._fb.group({
		username: ['', [Validators.required]],
		password: ['', [Validators.required]],
		remember: [false, [Validators.required]],
	});

	public onLogin = () => {
		if (this.validateForm.valid) {
			this._authService.login();
		} else {
			for (const control of Object.values(this.validateForm.controls)) {
				if (control.invalid) {
					control.markAsDirty();
					control.updateValueAndValidity({ onlySelf: true });
				}
			}
		}
	};
}
