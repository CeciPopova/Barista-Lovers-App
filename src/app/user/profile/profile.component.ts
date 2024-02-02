import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private userService: UserService) {}

  get userName(): string {
    return this.userService.user?.firstName || '';
  }

  get userEmail(): string {
    return this.userService.user?.email || '';
  }
}
