import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdBarComponent } from './ad-bar/ad-bar.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MixComponent } from './mix/mix.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';
import { WindowsComponent } from './windows/windows.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AdminComponent } from './admin/admin.component';
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';
import { EditContactComponent } from './edit-contact/edit-contact.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdBarComponent,
    DetailComponent,
    FooterComponent,
    WelcomeComponent,
    MixComponent,
    WindowsComponent,
    ContactsComponent,
    ContactDetailsComponent,
    AdminComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
