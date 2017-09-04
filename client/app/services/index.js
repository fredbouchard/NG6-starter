import angular from 'angular';
import {contactsService} from './contacts.svc';

let services = angular.module('services', [])
  .factory('contactsService', contactsService)
  .name;

export default services;
