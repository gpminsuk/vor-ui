import { Component } from '@angular/core';
import { Event } from 'src/app/types';
import { UserService } from 'src/app/user.service';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css'],
})
export class EventRegisterComponent {
  event_name = '';
  event_desc = '';
  event_banner?: File;

  constructor(
    private userService: UserService,
    private web3Service: Web3Service
  ) {}

  async createEvent() {
    await this.web3Service.createEvent(
      this.userService.getUser(),
      this.event_name,
      this.event_desc,
      this.event_banner!
    );
    alert('SUCCESS!');
  }

  selectFile(e: any) {
    this.event_banner = e.target.files[0];
  }
}
