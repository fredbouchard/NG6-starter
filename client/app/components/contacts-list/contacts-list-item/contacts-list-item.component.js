import template from './contacts-list-item.html';
import controller from './contacts-list-item.controller';
import './contacts-list-item.scss';

let contactComponent = {
  bindings: {
    name: '@',
    picture: '@',
    onEdit: '&?',
    onDelete: '&?',
    onView: '&'
  },
  template,
  controller
};

export default contactComponent;
