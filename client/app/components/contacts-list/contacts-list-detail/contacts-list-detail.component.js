import template from './contacts-list-detail.html';
import controller from './contacts-list-detail.controller';
import './contacts-list-detail.scss';

let contactsListDetailComponent = {
  bindings: {
    contact: '<'
  },
  template,
  controller
};

export default contactsListDetailComponent;
