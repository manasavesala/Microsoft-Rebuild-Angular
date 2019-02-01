import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Contact } from './contact.model';

@Injectable()
export class ContactService {
  contacts: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) { 
    this.contacts = database.list('contacts');
  }
  getContacts(){
    return this.contacts;
  }

  getContactById(contactId: string){
    return this.database.object('contacts/' + contactId);
  }

  addContact(newContact: Contact){
    this.contacts.push(newContact);
  }
  updateContact(localUpdatedContact){
    var contactEntryInFirebase = this.getContactById(localUpdatedContact.$key);
    contactEntryInFirebase.update({name: localUpdatedContact.name,
                                email: localUpdatedContact.email,
                                phone: localUpdatedContact.phone});
  }

}
