import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { EventsComponent } from './events/events.component';

import { ExampleComponent } from './example/example.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'example',
        component: ExampleComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'display',
          },
          { path: 'display', component: DisplayComponent },
          { path: 'events', component: EventsComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
