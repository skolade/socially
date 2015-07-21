///<reference path="../typings/typings.d.ts" />
'use strict';
/**
 * Routes
 * @type {angular.module}
 */
angular.module('app')
    .config(function ($stateProvider) {
    $stateProvider
        .state('main', {
        url: '/',
        template: "<socially-main></socially-main>"
    })
        .state('secondary', {
        url: '/secondary',
        template: '<secondary></secondary>'
    });
});


// Router.route('/', {
//   name: 'home',
//   action: function () {
//     this.render('home');
//     SEO.set({ title: 'Home - ' + Meteor.App.NAME });
//   }
// });
/* require user for route */
//"currentUser": ["$meteor", function($meteor:angular.meteor.IMeteorService){
//  return $meteor.requireUser();
//}]
//# sourceMappingURL=routes.js.map
