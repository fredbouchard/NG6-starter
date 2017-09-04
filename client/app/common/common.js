import angular from 'angular';
import filterbar  from './filterbar'

let commonModule = angular.module('app.common', [
  filterbar
])

.name;

export default commonModule;
