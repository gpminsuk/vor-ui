import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { EventsComponent } from './events/events.component';
import { MainComponent } from './main/main.component';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { EventDetailNavigationComponent } from './event-detail-navigation/event-detail-navigation.component';
import { AvatarComponent } from './avatar/avatar.component';
import { EventRegisterComponent } from './events/event-register/event-register.component';
import { EventUploadBadgesComponent } from './events/event-upload-badges/event-upload-badges.component';
import { EventFinalizeBadgeInfoComponent } from './events/event-finalize-badge-info/event-finalize-badge-info.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'event/:id',
        component: EventDetailNavigationComponent,
        canActivate: [AuthGuard],
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
          { path: 'avatar', component: AvatarComponent },
          { path: 'display', component: DisplayComponent },
          {
            path: 'events',
            children: [
              {
                path: '',
                component: EventsComponent,
              },
              {
                path: 'register',
                component: EventRegisterComponent,
              },
              {
                path: 'badges',
                component: EventUploadBadgesComponent,
              },
              {
                path: 'finalize',
                component: EventFinalizeBadgeInfoComponent,
              },
            ],
          },
          { path: 'profile', component: ProfileComponent },
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
