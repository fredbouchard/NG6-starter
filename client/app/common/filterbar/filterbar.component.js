import template from './filterbar.html';
import controller from './filterbar.controller';
import './filterbar.scss';

let filterbarComponent = {
  bindings: {
    showFilters: '<',
    categoryList: '<',
    searchValue: '='
  },
  template,
  controller
};

export default filterbarComponent;
