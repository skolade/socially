///<reference path="../../../typings/typings.d.ts" />
'use strict';
var ProfileCtrl = (function () {
    function ProfileCtrl(Accounts, $meteor) {
        this.Accounts = Accounts;
    }
    return ProfileCtrl;
})();
ProfileCtrl.$inject = ['Accounts'];
function profile() {
    return {
        templateUrl: 'client/components/accounts/profile.ng.html',
        controllerAs: 'accounts',
        controller: ProfileCtrl
    };
}
/**
 * Profile Component
 * @type {angular.module}
 */
angular.module('socially.accounts')
    .directive('sociallyProfile', profile);
//# sourceMappingURL=profile.js.map
