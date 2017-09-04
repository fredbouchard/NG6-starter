import _ from 'lodash';

class ContactsListController {
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
  }

  $onInit() {
    this.loadedContacts = [];
    this.filterByName = '';
    this.loadContact = null;
  }

  $onChanges(changes) {
    if (changes.contacts && changes.contacts.currentValue !== changes.contacts.previousValue) {
      this.loadedContacts = changes.contacts.currentValue;
    }
  }

  addContact() {
    // @todo Open the add contact modal
  }

  toggleDetailView(id) {
    this.loadContact = _.find(this.loadedContacts, {id: id});
    this.$mdSidenav('add')
      .toggle()
      .then(() => {
      });
  }
}

// DInjections
ContactsListController.$inject = ['$mdSidenav'];

export default ContactsListController;


