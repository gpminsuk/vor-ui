import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { EventService } from '../event.service';
import { Badge } from '../types';

@Component({
  selector: 'app-assign-badge',
  templateUrl: './assign-badge.component.html',
  styleUrls: ['./assign-badge.component.css'],
})
export class AssignBadgeComponent {
  isLoading = false;
  event = this.eventService.getEvent();
  badges: Badge[];

  constructor(
    private eventService: EventService,
    private navParams: NavParams
  ) {
    this.badges = this.navParams.get('badges');
  }
}
