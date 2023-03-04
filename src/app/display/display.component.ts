import { Component } from '@angular/core';
import { User } from '../types';
import { UserService } from '../user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  user?: User;
  isLoading = false;

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.user = this.userService.getUser();
    this.user = await this.userService.fetchUser();
  }
}
