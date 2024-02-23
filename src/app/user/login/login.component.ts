import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_IMAIL_DOMAINS } from '../../shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  appEmailDomains = DEFAULT_IMAIL_DOMAINS;
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    const { email, password } = form.value
    console.log(form.value);
     this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/']);
     })
    
  }
}
