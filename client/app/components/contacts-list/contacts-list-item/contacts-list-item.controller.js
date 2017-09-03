class ContactController {
  constructor() {

  }

  $onInit() {
    this.pictureUrl = `url('${this.picture}')`;
  }

  $onChanges(changes) {
    if(changes.picture && changes.name.picture !== changes.name.picture) {
      this.picture = changes.name.picture;
    }

    if(changes.name && changes.name.currentValue !== changes.name.previousValue) {
      this.name = changes.name.currentValue;
    }
  }
}

export default ContactController;
