import angular from 'angular';
import ContactsList from './contacts-list';
import Main from './main';

let componentModule = angular.module('app.components', [
  Main,
  ContactsList
])

.name;

export default componentModule;
