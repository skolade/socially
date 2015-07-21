///<reference path="../../../typings/typings.d.ts" />
'use strict';
var MainCtrl = (function () {
    function MainCtrl() {
        this.componentName = 'main';
    }
    return MainCtrl;
})();
function main() {
    return {
        templateUrl: 'client/components/main/main.ng.html',
        controllerAs: 'main',
        controller: MainCtrl
    };
}
/**
 * Main
 * default home page
 * @type {angular.module}
 */
angular.module('socially.main').directive('sociallyMain', main);
//# sourceMappingURL=main.js.map
