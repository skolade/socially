///<reference path="../../../typings/typings.d.ts" />
'use strict';

/**
 * Account Routes
 * @type {angular.module}
 */
angular.module('socially.accounts')
  .config(function ($stateProvider:angular.ui.IStateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<socially-login></socially-login>'
      })
      .state('register', {
        url: '/register',
        template: '<socially-register></socially-register>'
      })
      .state('resetpw', {
        url: '/resetpw',
        template: '<socially-reset-pw></socially-reset-pw>'
      })
      .state('logout', {
        url: '/logout',
        resolve: {
          'logout': ['Accounts',
            function (Accounts) {
              return Accounts.logout();
            }]
        }
      })
    .state('profile', {
        url: '/profile',
        template: '<socially-profile></socially-profile>'
      })
  });