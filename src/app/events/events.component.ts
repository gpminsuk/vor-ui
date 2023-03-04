import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import _ from 'lodash';
import api from '../api';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { Event } from '../types';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  events?: Event[];
  eventDetailComponent = EventDetailComponent;

  constructor(private router: Router, private navCtrl: NavController) {}

  async ngOnInit() {
    this.events = await api.get('/event');
  }

  async goToEventDetail(event: Event) {
    this.navCtrl.navigateForward(`/event/${event.id}`);
    this.router.navigate([`/event/${event.id}`]);
  }
}
