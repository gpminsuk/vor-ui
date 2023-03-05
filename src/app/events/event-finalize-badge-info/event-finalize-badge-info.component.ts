import { Component } from '@angular/core';

@Component({
  selector: 'app-event-finalize-badge-info',
  templateUrl: './event-finalize-badge-info.component.html',
  styleUrls: ['./event-finalize-badge-info.component.css'],
})
export class EventFinalizeBadgeInfoComponent {
  event_badge = '';
  event_badge_name = '';
  event_badge_number = '';
  event_badge_desc = '';

  addBadge() {}
}
