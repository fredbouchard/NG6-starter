import template from './contact.html';
import controller from './contact.controller';
import './contact.scss';

let contactComponent = {
  bindings: {
    name: '@',
    phone: '@',
    job: '@',
    email: '@',
    address: '@',
    picture: '@',

  },
  template,
  controller
};

export default contactComponent;
