import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignBadgeComponent } from '../assign-badge/assign-badge.component';
import { BadgeListComponent } from '../badge-list/badge-list.component';
import { EventService } from '../event.service';
import { Event } from '../types';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent {
  id: string;
  event?: Event;
  badgeListComponent = BadgeListComponent;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private eventService: EventService
  ) {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  async goBack() {
    this.location.back();
  }

  async ngOnInit() {
    this.event = await this.eventService.fetchEvent(this.id);
  }
}
