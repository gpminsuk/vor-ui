import { Component } from '@angular/core';
import { User } from '../types';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService],
})
export class ProfileComponent {
  user?: User;

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.user = await this.userService.fetchUser();
  }

  async logout() {
    await this.userService.logout();
  }
}
