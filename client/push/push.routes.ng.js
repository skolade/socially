'use strict'

angular.module('sociallyApp')
.config(function($stateProvider) {
  $stateProvider
  .state('push', {
    url: '/push',
    templateUrl: 'client/push/push.view.ng.html',
    controller: 'PushCtrl',
    resolve: {
      currentUser: ['$meteor', function($meteor) {
        return $meteor.requireUser();
      }]
    }
  });
});