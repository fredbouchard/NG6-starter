import angular from 'angular';
import Home from './home/home';
import Contacts from './contacts';
import Contact from './contact';

let componentModule = angular.module('app.components', [
  Home,
  Contacts,
  Contact
])

.name;

export default componentModule;
