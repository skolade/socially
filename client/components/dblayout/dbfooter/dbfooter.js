///<reference path="../../../../typings/typings.d.ts" />
var DbFooterCtrl = (function () {
    function FooterCtrl() {
    }
    return DbFooterCtrl;
})();
function dbfooter() {
    return {
        templateUrl: 'client/components/dblayout/dbfooter/dbfooter.ng.html',
        controllerAs: 'dbfooter',
        controller: DbFooterCtrl
    };
}
/**
 * Footer
 * @type {angular.module}
 */
angular.module('socially.dblayout')
    .directive('sociallyDbFooter', dbfooter);
//# sourceMappingURL=footer.js.map
