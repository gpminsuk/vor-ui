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
  ongoingEvent?: Event[];
  futureEvent?: Event[];
  pastEvent?: Event[];

  constructor() {}

  async ngOnInit() {
    const { ongoing, future, past } = await api.get('/user/events');
    this.ongoingEvent = ongoing;
    this.futureEvent = future;
    this.pastEvent = past;
  }
}
