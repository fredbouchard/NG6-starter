class ContactsController {

  constructor(contactsService) {
    this.contactsService = contactsService;
    this.contacts = {};
  }

  $onInit() {
    this.contactsService.get().then(
      data => {
        this.contacts = data;
      }
    )

  }
}

//Inject Service
ContactsController.$inject = ['contactsService'];

export default ContactsController;


