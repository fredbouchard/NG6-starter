class ContactsListDetailController {
  constructor() {
    this.pictureUrl = '';
  }

  $onChanges(changes) {
    if(changes.contact && changes.contact.currentValue !== changes.contact.previousValue) {

      this.contact = changes.contact.currentValue;
      if(this.contact) {
        this.pictureUrl = `url('${this.contact.picture}')`;
      }
    }
  }
}

export default ContactsListDetailController;
