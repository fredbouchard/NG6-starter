import angular from 'angular';
import Contacts from './contacts';
import Contact from './contact';
import Main from './main';

let componentModule = angular.module('app.components', [
  Main,
  Contacts,
  Contact
])

.name;

export default componentModule;
