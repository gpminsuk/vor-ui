import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { DisplayComponent } from './display/display.component';
import { EventsComponent } from './events/events.component';
import { AuthGuard } from './authGuard';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomepageComponent,
    LoginComponent,
    CallbackComponent,
    DisplayComponent,
    EventsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot()],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
