import template from './contacts-list.html';
import controller from './contacts-list.controller';
import './contacts-list.scss';

let contactsListComponent = {
  bindings: {
    contacts: "<"
  },
  template,
  controller
};

export default contactsListComponent;
