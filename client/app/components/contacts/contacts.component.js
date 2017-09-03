import template from './contacts.html';
import controller from './contacts.controller';
import './contacts.scss';

let contactsComponent = {
  bindings: {
    contacts: "<"
  },
  template,
  controller
};

export default contactsComponent;
