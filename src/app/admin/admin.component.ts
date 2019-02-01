import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

constructor(private contactService: ContactService) { }

ngOnInit() {

}

submitForm(contactName: string, contactEmail: string, contactPhone: string) {
  var newContact: Contact = new Contact(contactName, contactEmail, contactPhone);
  this.contactService.addContact(newContact);
}
}
