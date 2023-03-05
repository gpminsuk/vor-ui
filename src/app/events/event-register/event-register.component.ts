import { Component } from '@angular/core';
import { Event } from 'src/app/types';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css'],
})
export class EventRegisterComponent {
  event_name = '';
  event_desc = '';
  event_banner = '';
}
