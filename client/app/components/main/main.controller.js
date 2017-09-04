import _ from 'lodash';

class MainController {
  constructor(contactsService) {
    this.name = 'main';
    this.showFilters = false;
    this.contactsService = contactsService;
    this.contacts = {};
    this.searchName = null;
  }


  $onInit() {
    this.contactsService.get().then(
      data => {
        this.contacts = data;
      }
    )
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
}


//Inject Service
MainController.$inject = ['contactsService'];

export default MainController;
