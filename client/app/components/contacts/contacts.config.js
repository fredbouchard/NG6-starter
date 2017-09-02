module.exports = function ($stateProvider, $urlRouterProvider) {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('contacts', {
      url: '/',
      component: 'contacts'
    });
};
