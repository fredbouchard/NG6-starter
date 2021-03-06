import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import 'normalize.css';

import Common from './common/common';
import Services from './services';
import Components from './components/components';
import AppComponent from './app.component';


angular.module('app', [
    uiRouter,
    ngMaterial,
    Common,
    Components,
    Services
  ])
  .config(($locationProvider, $mdThemingProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('pink');
  })

  .component('app', AppComponent);
