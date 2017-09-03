import angular from 'angular';
import ContactsList from './contacts-list';
import Contact from './contact';
import Main from './main';

let componentModule = angular.module('app.components', [
  Main,
  ContactsList,
  Contact
])

.name;

export default componentModule;
