import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsListItemComponent from './contacts-list-item.component';

let contactListItemModule = angular.module('contactsListItem', [
  uiRouter
])

  .component('contactsListItem', contactsListItemComponent)
  .name;

export default contactListItemModule;
