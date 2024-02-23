import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

interface User {
  email: string;
  username: string;
  // password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  user$ = this.user$$.asObservable();

  user: User | undefined;

  USER_KEY = '[user]';

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<User>('/api/users/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string
  ) {
    return this.http
      .post<User>('/api/users/register', {
        username,
        email,
        password,
        rePassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post<User>('/api/users/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }


  getProfile() {
    return this.http.get<User>('/api/users/profile').pipe(tap((user) => this.user$$.next(user)));
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
