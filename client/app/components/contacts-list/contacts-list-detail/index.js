import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsListDetailComponent from './contacts-list-detail.component';

let contactListDetailModule = angular.module('contactsListDetail', [
  uiRouter
])

  .component('contactsListDetail', contactsListDetailComponent)
  .name;

export default contactListDetailModule;
