///<reference path="../../../typings/typings.d.ts" />
'use strict';
var LoginCtrl = (function () {
    function LoginCtrl(Accounts) {
        this.Accounts = Accounts;
        this.page = 'login';
    }
    return LoginCtrl;
})();
LoginCtrl.$inject = ['Accounts'];
function login() {
    return {
        templateUrl: 'client/components/accounts/accounts.ng.html',
        controllerAs: 'accounts',
        controller: LoginCtrl
    };
}
/**
 * Login Component
 * @type {angular.module}
 */
angular.module('socially.accounts')
    .directive('sociallyLogin', login);
//# sourceMappingURL=login.js.map
