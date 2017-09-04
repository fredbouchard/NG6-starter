import _ from 'lodash';

class ContactsListController {
  constructor(
      $mdSidenav,
      $mdDialog
  ) {
    this.$mdSidenav = $mdSidenav;
    this.$mdDialog = $mdDialog;
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

  addContact(event) {
    console.log('>>>', this.loadedContacts);
    // @todo Open the add contact modal
    this.$mdDialog.show({
      controller: ContactsListController,
      controllerAs: '$ctrl',
      event: event,
      templateUrl: '/app/components/contacts-list/common/add/contacts-list.add.tpl.html',
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      locals: {
        'contacts': 'fu'
      }
    })
      .then(function (answer) {
       console.log(answer);
      }, function () {
       console.log('You cancelled the dialog.');
      });
  }

  onSaveDialog(answer) {
    this.$mdDialog.hide(answer);
  }

  closeDialogue(){
    this.$mdDialog.cancel();
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
ContactsListController.$inject = ['$mdSidenav', '$mdDialog'];

export default ContactsListController;


