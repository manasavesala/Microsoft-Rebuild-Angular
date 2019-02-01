import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }
  goToDetailPage(clickedContact) {
    this.router.navigate(['contact', clickedContact.$key]);
    console.log(clickedContact.$key);
  };

}
