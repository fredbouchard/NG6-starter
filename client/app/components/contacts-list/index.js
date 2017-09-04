import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsListItem from './contacts-list-item';
import contactsListDetail from './contacts-list-detail';
import contactsListComponent from './contacts-list.component';


let contactsListModule = angular.module('contactsList', [
  uiRouter,
  contactsListItem,
  contactsListDetail
])
  .component('contactsList', contactsListComponent)
  .config(require('./contacts-list.config'))
  .name;

export default contactsListModule;
