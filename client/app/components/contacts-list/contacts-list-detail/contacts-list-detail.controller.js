class ContactsListDetailController {
  constructor() {
    this.pictureUrl = '';
  }

  $onInit() {
    console.log('>>>', 'ContactListDetailController');
  }

  $onChanges(changes) {
    if(changes.contact && changes.contact.currentValue !== changes.contact.previousValue) {

      this.contact = changes.contact.currentValue;
      if(this.contact) {
        console.log('>>>', this.contact.picture);
        this.pictureUrl = `url('${this.contact.picture}')`;
      }
    }
  }
}

export default ContactsListDetailController;
