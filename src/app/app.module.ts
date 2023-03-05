import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { DisplayComponent } from './display/display.component';
import { EventsComponent } from './events/events.component';
import { AuthGuard } from './auth-guard';
import { ProfileComponent } from './profile/profile.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AssignBadgeComponent } from './assign-badge/assign-badge.component';
import { EventDetailNavigationComponent } from './event-detail-navigation/event-detail-navigation.component';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomepageComponent,
    LoginComponent,
    CallbackComponent,
    DisplayComponent,
    EventsComponent,
    ProfileComponent,
    EventDetailComponent,
    AssignBadgeComponent,
    EventDetailNavigationComponent,
    BadgeListComponent,
    AvatarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
