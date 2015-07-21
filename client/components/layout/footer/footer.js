///<reference path="../../../../typings/typings.d.ts" />
var FooterCtrl = (function () {
    function FooterCtrl() {
    }
    return FooterCtrl;
})();
function footer() {
    return {
        templateUrl: 'client/components/layout/footer/footer.ng.html',
        controllerAs: 'footer',
        controller: FooterCtrl
    };
}
/**
 * Footer
 * @type {angular.module}
 */
angular.module('socially.layout')
    .directive('sociallyFooter', footer);
//# sourceMappingURL=footer.js.map
