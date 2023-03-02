import { Component } from '@angular/core';
import { User } from './types';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent {
  title = 'vor-ui';
  user?: User;

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.user = await this.userService.fetchUser();
  }
}
