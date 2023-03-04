import { Component } from '@angular/core';
import { EventDetailComponent } from '../event-detail/event-detail.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  styles: [
    ':host {align-items: center; display: flex; flex-direction: column;}',
  ],
})
export class MainComponent {}
