import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Magic } from 'magic-sdk';
import api, { initializeAxios } from './api';
import { User } from './types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  m: Magic;
  user?: User;

  constructor(private router: Router) {
    this.m = new Magic('pk_live_052B100BE33F7355', {
      network: {
        rpcUrl: 'https://rpc-mumbai.maticvigil.com',
        chainId: 80001,
      },
    });
  }

  getUser() {
    return this.user!;
  }

  async fetchUser() {
    if (await this.m.user.isLoggedIn()) {
      const token = await this.m.user.getIdToken();
      initializeAxios(token);
      this.user = await api.get('/user');
    }
    return this.user;
  }

  async logout() {
    await this.m.user.logout();
    this.router.navigate(['/login']);
  }
}
