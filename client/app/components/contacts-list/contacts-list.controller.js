class ContactsController {
  constructor() {
    this.loadedContacts = {};
  }

  $onInit() {
    if(this.contacts){
      this.loadedContacts = this.contacts;
    }

    console.log('>>>', this.loadedContacts);
  }

  $onChanges(changes) {
    if( changes.contacts && changes.contacts.currentValue !== changes.contacts.previousValue ){
      this.loadedContacts = changes.contacts.currentValue;
    }
  }

  addContact() {
    let newContact = {
      "id": "003",
      "name": "FU"
    };
    this.loadedContacts.push(newContact);
  }
}

export default ContactsController;


