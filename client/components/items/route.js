///<reference path="../../../typings/typings.d.ts" />
'use strict';
/**
 * Item Routes
 * @type {angular.module}
 */
angular.module('socially.items')
    .config(function ($stateProvider) {
    $stateProvider
        .state('item', {
        url: '/items/:itemId',
        template: '<item-object previous-state="{{pre.previousState}}"></item-object>',
        resolve: {
            previousState: ["$state", function ($state) {
                    return $state.current.name;
                }]
        },
        // wrap in controller until component router is available
        controller: function (previousState) {
            this.previousState = previousState || 'main';
        },
        controllerAs: 'pre'
    });
});
//# sourceMappingURL=route.js.map