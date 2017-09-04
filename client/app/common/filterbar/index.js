import angular from 'angular';
import uiRouter from 'angular-ui-router';
import filterbarComponent from './filterbar.component';

let filterbarModule = angular.module('filterbar', [
  uiRouter
])

  .component('filterbar', filterbarComponent)
  .name;

export default filterbarModule;
