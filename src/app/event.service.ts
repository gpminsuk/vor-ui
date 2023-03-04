import { Injectable } from '@angular/core';
import api from './api';
import { Event } from './types';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  event?: Event;

  constructor() {}

  getEvent() {
    return this.event!;
  }

  async fetchEvent(id: string) {
    this.event = await api.get(`/event/${id}`);
    return this.event;
  }
}
