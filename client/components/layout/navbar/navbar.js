///<reference path="../../../../typings/typings.d.ts" />
'use strict';
var NavbarCtrl = (function () {
    function NavbarCtrl(Toggler) {
        this.Toggler = Toggler;
    }
    return NavbarCtrl;
})();
NavbarCtrl.$inject = ['Toggler'];
function sociallyNavbar() {
    return {
        templateUrl: 'client/components/layout/navbar/navbar.ng.html',
        controllerAs: 'navbar',
        controller: NavbarCtrl
    };
}
/**
 * Navbar
 * @type {angular.module}
 */
angular.module('socially.layout')
    .directive('sociallyNavbar', sociallyNavbar);
//# sourceMappingURL=navbar.js.map
