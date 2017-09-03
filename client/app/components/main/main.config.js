module.exports = function ($stateProvider, $urlRouterProvider) {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      component: 'main'
    });
};
