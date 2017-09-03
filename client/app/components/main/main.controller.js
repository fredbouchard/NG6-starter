class MainController {
  constructor(contactsService) {
    this.name = 'main';
    this.showFilters = false;
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

  toggleFilters() {
    console.log('>>>', this.showFilters);
    this.showFilters = !this.showFilters;
  }
}


//Inject Service
MainController.$inject = ['contactsService'];

export default MainController;
