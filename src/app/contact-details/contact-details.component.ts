import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactId: string;
  contactToDisplay;

  constructor( private route: ActivatedRoute,
    private location: Location,
    private contactService: ContactService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.contactId = urlParameters['id'];
    });

    this.contactService.getContactById(this.contactId).subscribe(dataLastEmittedFromObserver => {
      this.contactToDisplay = new Contact(dataLastEmittedFromObserver.name,
        dataLastEmittedFromObserver.email,
        dataLastEmittedFromObserver.phone)
    })
  }

}
