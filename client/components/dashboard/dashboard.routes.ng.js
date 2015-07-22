'use strict'

angular.module('sociallyApp')
.config(function($stateProvider) {
  $stateProvider
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'client/components/dashboard/dashboard.view.ng.html',
    controller: 'DashboardCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  });
});