import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent {
  title = 'vor-ui';
  constructor(private userService: UserService) {}

  async ngOnInit() {
    const user = await this.userService.getUser();
    console.log(user);
  }
}
