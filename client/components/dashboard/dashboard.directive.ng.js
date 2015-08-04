'use strict';

angular.module('sociallyApp')
.directive('dashboard', function() {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/dashboard/dashboard.view.ng.html',
    replace: true,
    link: function(scope, elem, attrs) {
      scope.property = 'dashboard';
    }
  };
});