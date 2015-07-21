///<reference path="../../../typings/typings.d.ts" />
'use strict';

class MainCtrl {
  componentName:String;

  constructor() {
    this.componentName = 'main';
  }
}

function main():angular.IDirective {
  return {
    templateUrl: 'client/components/main/main.ng.html',
    controllerAs: 'main',
    controller: MainCtrl
  };
}

/**
 * Main
 * default home page
 * @type {angular.module}
 */
angular.module('socially.main').directive('sociallyMain', main);