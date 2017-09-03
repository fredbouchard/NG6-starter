import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsListComponent from './contacts-list.component';

let contactsListModule = angular.module('contactsList', [
  uiRouter
])
  .component('contactsList', contactsListComponent)
  .config(require('./contacts-list.config'))
  .name;

export default contactsListModule;
