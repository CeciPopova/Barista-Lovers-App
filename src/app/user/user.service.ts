import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface User {
  email: string;
  firstName: string;
  username: string;
  // phoneNumber: string;
  // password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;

  USER_KEY = '[user]';

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(username: string, password: string) {
    return this.http.post('/api/login', { username, password });
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string
  ) {
    return this.http.post('/api/register', {
      username,
      email,
      password,
      rePassword,
    });
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
