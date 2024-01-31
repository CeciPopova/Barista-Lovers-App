import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { appEmailValidator } from '../../shared/validators/app-email-validator';
import { DEFAULT_IMAIL_DOMAINS } from '../../shared/constants';
import { matchPasswordsValidator } from '../../shared/validators/match-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_IMAIL_DOMAINS)]],
    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required]],
    },
    {
      validators: [matchPasswordsValidator('password', 'rePassword')],
    }
    )
  })
  constructor(private fb: FormBuilder) { }

  register(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }
}
