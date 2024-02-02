import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { appEmailValidator } from '../../shared/validators/app-email-validator';
import { DEFAULT_IMAIL_DOMAINS } from '../../shared/constants';
import { matchPasswordsValidator } from '../../shared/validators/match-password-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

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
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  register(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    const { username, email, passGroup: {password, rePassword} = {} } = this.form.value;
    this.userService.register(username!, email!, password!, rePassword!).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }
}
