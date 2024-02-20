import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css'
})
export class AuthenticateComponent implements OnInit{

  isAuthenticated = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: () => {
        this.isAuthenticated = true;
      },
      error: () => {
        this.isAuthenticated = true;
      },
      complete: () => {
        this.isAuthenticated = true;
      }
    })
  }
}
