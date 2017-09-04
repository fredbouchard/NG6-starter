import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component';

let mainModule = angular.module('main', [
  uiRouter
])
  .config(require('./main.config'))
  .component('main', mainComponent)
  .name;

export default mainModule;
