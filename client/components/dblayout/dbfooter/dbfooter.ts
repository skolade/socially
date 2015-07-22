///<reference path="../../../../typings/typings.d.ts" />

class DBFooterCtrl {}

function dbfooter():angular.IDirective {
  return {
    templateUrl: 'client/components/dblayout/dbfooter/dbfooter.ng.html',
    controllerAs: 'dbfooter',
    controller: DBFooterCtrl
  };
}

/**
 * Footer
 * @type {angular.module}
 */
angular.module('socially.dblayout')
  .directive('sociallyDbFooter', dbfooter);
