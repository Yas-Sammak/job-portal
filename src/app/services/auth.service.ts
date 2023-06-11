import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private isLoggedIn = false;
  private isAdmin = false;

  constructor() { }

  login(username: string, password: string): void
  {
    if (username === 'admin' && password === 'Test123')
    {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
  }

  logout(): void
  {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

  isAdminUser(): boolean
  {
    return this.isAdmin;
  }

  isLoggedInUser(): boolean
  {
    return this.isLoggedIn;
  }
}
