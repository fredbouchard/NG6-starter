import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsComponent from './contacts.component';

let contactsModule = angular.module('contacts', [
  uiRouter
])
  .component('contacts', contactsComponent)
  .config(require('./contacts.config'))
  .name;

export default contactsModule;
