'use strict';

angular.module('sociallyApp')
.directive('rightSideBar', function() {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/rightSideBar/right-side-bar.view.ng.html',
    replace: true,
    link: function(scope, elem, attrs) {
      scope.property = 'rightSideBar';
    }
  };
});