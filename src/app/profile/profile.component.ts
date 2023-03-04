import { Component } from '@angular/core';
import api from '../api';
import { Event, User } from '../types';
import { UserService } from '../user.service';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService],
})
export class ProfileComponent {
  user?: User;
  isLoading = false;

  constructor(
    private userService: UserService,
    private web3Service: Web3Service
  ) {}

  async ngOnInit() {
    this.user = this.userService.getUser();
    this.user = await this.userService.fetchUser();
  }

  async logout() {
    await this.userService.logout();
  }

  async accept(event: Event, tokenId: number) {
    this.isLoading = true;
    try {
      await this.web3Service.accept(event, this.userService.getUser(), tokenId);
      await api.post(`/event/${event.id}/${tokenId}/accept`);
      await this.userService.fetchUser();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  async reject(event: Event, tokenId: number) {
    this.isLoading = true;
    try {
      await this.web3Service.reject(event, this.userService.getUser(), tokenId);
      await api.post(`/event/${event.id}/${tokenId}/reject`);
      await this.userService.fetchUser();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
