///<reference path="../../typings/typings.d.ts" />
'use strict';
/**
 * Material Design Theme Set
 * @type {angular.module}
 */
angular.module('app')
    .config(function ($mdThemingProvider) {
     $mdThemingProvider.theme('default')
        .primaryPalette('indigo',
      {
        'default': '500', // by default use shade 400 from the indigo palette for primary intentions
        'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
        'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
      })
        .accentPalette('blue',
      {
        'default': '500', // by default use shade 400 from the deep-orange palette for primary intentions
        'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
        'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
      })
        .warnPalette('red', {
          'default': '500', // by default use shade 400 from the deep-orange palette for primary intentions
          'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        });
    $mdThemingProvider.theme('socially')
      .primaryPalette('teal', {
        'default': '500', // by default use shade 400 from the deep-orange palette for primary intentions
        'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
        'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
      })
});
//# sourceMappingURL=theme.js.map
