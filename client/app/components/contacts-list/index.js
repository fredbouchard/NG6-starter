import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsListItem from './contact-list-item';
import contactsListComponent from './contacts-list.component';


let contactsListModule = angular.module('contactsList', [
  uiRouter,
  contactsListItem
])
  .component('contactsList', contactsListComponent)
  .config(require('./contacts-list.config'))
  .name;

export default contactsListModule;
