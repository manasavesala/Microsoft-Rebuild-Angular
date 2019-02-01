import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdBarComponent } from './ad-bar/ad-bar.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { TabComponent } from './tab/tab.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MixComponent } from './mix/mix.component';

import { routing } from './app.routing';
import { WindowsComponent } from './windows/windows.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdBarComponent,
    DetailComponent,
    FooterComponent,
    TabComponent,
    WelcomeComponent,
    MixComponent,
    WindowsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
