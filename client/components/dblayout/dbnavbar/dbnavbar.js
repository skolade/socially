///<reference path="../../../../typings/typings.d.ts" />
'use strict';
var DbNavbarCtrl = (function () {
    function DbNavbarCtrl(Toggler) {
        this.Toggler = Toggler;
    }
    return DbNavbarCtrl;
})();
DbNavbarCtrl.$inject = ['Toggler'];
function sociallyDbNavbar() {
    return {
        templateUrl: 'client/components/dblayout/dbnavbar/dbnavbar.ng.html',
        controllerAs: 'dbnavbar',
        controller: DbNavbarCtrl
    };
}
/**
 * Navbar
 * @type {angular.module}
 */
angular.module('socially.dblayout')
    .directive('sociallyDbNavbar', sociallyDbNavbar);
//# sourceMappingURL=navbar.js.map
