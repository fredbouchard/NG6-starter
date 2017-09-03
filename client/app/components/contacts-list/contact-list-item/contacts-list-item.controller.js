class ContactController {
  constructor() {

  }

  $onInit() {
    console.log('>>>', this.picture);
    this.pictureUrl = `url('${this.picture}')`;

    console.log('>>>', this.picture);
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
