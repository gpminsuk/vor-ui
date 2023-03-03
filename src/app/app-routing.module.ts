import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { EventsComponent } from './events/events.component';
import { MainComponent } from './main/main.component';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authGuard';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'main',
        component: MainComponent,
        canActivate: [AuthGuard],
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
      {
        path: 'callback',
        component: CallbackComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
