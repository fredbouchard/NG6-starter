import _ from 'lodash';

class ContactsListController {
  constructor($mdSidenav,
              $mdDialog) {
    this.$mdSidenav = $mdSidenav;
    this.$mdDialog = $mdDialog;
  }

  $onInit() {
    this.loadedContacts = [];
    this.filterByName = '';
    this.contact = null;
  }

  $onChanges(changes) {
    if (changes.contacts && changes.contacts.currentValue !== changes.contacts.previousValue) {
      this.loadedContacts = changes.contacts.currentValue;
    }
  }

  openContactDialog(contact, mode='add') {
    this.$mdDialog.show({
      controller: ContactsListController,
      controllerAs: '$ctrl',
      preserveScope: true,
      templateUrl: '/app/components/contacts-list/common/add/contacts-list.add.tpl.html',
      parent: angular.element(document.body),
      clickOutsideToClose: false,
      locals: {
        mode,
        contact
      },
      bindToController: true
    })
      .then(newContact => {
        this._saveContact(newContact);
      }, () => {
        console.log('>>', 'User cancel');
      });
  }

  closeDialogue() {
    this.$mdDialog.cancel();
  }

  onSaveContactDialog(newContact) {
    this.$mdDialog.hide(newContact);
  }

  toggleView(hashKey) {
    this.contact = _.find(this.loadedContacts, {$$hashKey: hashKey});
    this.$mdSidenav('add')
      .toggle();
  }

  triggerEdit(hashKey) {
    this.contact = _.find(this.loadedContacts, {$$hashKey: hashKey});
    this.openContactDialog(this.contact, 'edit');
  }

  triggerDelete(hashKey) {
    //Normally I would call a "remove" Method in the contacts.svc that calls the API
    _.remove(this.loadedContacts, {
      $$hashKey: hashKey
    });
  }

  _saveContact(contact) {

    if (contact) {
      if(_.isNil(contact.$$hashKey)) {
        //Normally I would call an "add" Method in the contacts.svc that calls the API
        this.loadedContacts.push(contact);
      } else {
        //Normally I would call an "update" Method in the contacts.svc that calls the API
        _.update(this.loadedContacts, this.loadedContacts[contact.$$hashKey], contact);
      }
    }
  }
}

// DInjections
ContactsListController.$inject = ['$mdSidenav', '$mdDialog'];

export default ContactsListController;


