import { Component } from '@angular/core';
import _ from 'lodash';
import api from '../api';
import { Event } from '../types';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  ongoingEvent?: Event;
  futureEvent?: Event;
  pastEvent?: Event;

  constructor() {}

  async ngOnInit() {
    const events = await api.get('/user/events/ongoing');
    this.ongoingEvent = events[0];
  }
}
