import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import _ from 'lodash';
import api from '../api';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { Event } from '../types';
import { UserService } from '../user.service';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  isLoading = false;
  events?: Event[];
  eventDetailComponent = EventDetailComponent;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private web3Service: Web3Service,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.isLoading = true;
    try {
      this.events = await api.get('/event');
    } finally {
      this.isLoading = false;
    }
  }

  async goToEventDetail(event: Event) {
    this.navCtrl.navigateForward(`/event/${event.id}`);
    this.router.navigate([`/event/${event.id}`]);
  }

  async createEvent() {
    this.isLoading = true;
    try {
      await this.web3Service.createEvent(
        this.userService.getUser(),
        'name',
        'desc'
      );
      this.events = await api.get('/event');
    } finally {
      this.isLoading = false;
    }
  }
}
