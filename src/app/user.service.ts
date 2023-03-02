import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Magic } from 'magic-sdk';
import api, { initializeAxios } from './api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  m: Magic;

  constructor(private router: Router) {
    this.m = new Magic('pk_live_052B100BE33F7355');
  }

  async getUser() {
    if (await this.m.user.isLoggedIn()) {
      const token = await this.m.user.getIdToken();
      initializeAxios(token);
      return await api.get('/user');
    }
  }

  async logout() {
    await this.m.user.logout();
    this.router.navigate(['/login']);
  }
}
