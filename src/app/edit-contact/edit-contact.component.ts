import { Component,Input,OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  @Input() selectedContact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  beginUpdatingContact(contactToUpdate){
    this.contactService.updateContact(contactToUpdate);
  }

  beginDeletingContact(contactToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.contactService.deleteContact(contactToDelete);
    }
  }
}
