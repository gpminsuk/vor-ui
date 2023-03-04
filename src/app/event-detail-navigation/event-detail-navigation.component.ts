import { Component } from '@angular/core';
import { EventDetailComponent } from '../event-detail/event-detail.component';

@Component({
  selector: 'app-event-detail-navigation',
  templateUrl: './event-detail-navigation.component.html',
  styleUrls: ['./event-detail-navigation.component.css'],
  styles: [
    ':host {align-items: center; display: flex; flex-direction: column;}',
  ],
})
export class EventDetailNavigationComponent {
  component = EventDetailComponent;
}
