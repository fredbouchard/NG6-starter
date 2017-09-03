module.exports = function ($stateProvider, $urlRouterProvider) {
  "ngInject";

  $stateProvider
    .state('contact', {
      url: '/:id',
      component: 'contactDetails'
    });
};
