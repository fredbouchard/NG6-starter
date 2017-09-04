class ContactController {
  constructor($scope, $timeout) {
    this.$scope = $scope;
    this.$timeout = $timeout;
  }

  $onInit() {
    this.pictureUrl = `url('${this.picture}')`;
    this.fabDialIsOpen = false;
  }

  $onChanges(changes) {
    if (changes.picture && changes.name.picture !== changes.name.picture) {
      this.picture = changes.name.picture;
    }

    if (changes.name && changes.name.currentValue !== changes.name.previousValue) {
      this.name = changes.name.currentValue;
    }
  }

  openFabDial($event) {
    $event.stopPropagation();
    this.fabDialIsOpen = true;
  }

  closeFabDial($event) {
    $event.stopPropagation();
    this.fabDialIsOpen = false;
  }

  edit($event) {
    $event.stopPropagation();
    if (this.onEdit) {
      this.onEdit();
    }
  }

  delete($event) {
    $event.stopPropagation();
    if (this.onDelete) {
      this.onDelete();
    }

  }

  view($event) {
    $event.stopPropagation();
    if (this.onView) {
      this.onView();
    }
  }
}

ContactController.$inject = ['$rootScope', '$timeout'];

export default ContactController;
