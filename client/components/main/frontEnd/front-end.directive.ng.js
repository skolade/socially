'use strict';

angular.module('sociallyApp', [])
.directive('frontEnd', function() {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/main/frontEnd/front-end.view.ng.html',
    replace: true,
    link: function(scope, elem, attrs) {
      scope.property = 'frontEnd';
    }
  };
});
