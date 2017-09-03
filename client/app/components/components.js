import angular from 'angular';
import ContactsList from './contacts-list';
import ContactListItem from './contact-list-item';
import Main from './main';

let componentModule = angular.module('app.components', [
  Main,
  ContactsList,
  ContactListItem
])

.name;

export default componentModule;
