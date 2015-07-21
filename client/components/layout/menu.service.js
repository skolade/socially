///<reference path="../../../typings/typings.d.ts" />
'use strict';
var MenuItems = (function () {
    function MenuItems() {
        this.items = [{
                name: 'MAIN.TITLE',
                link: 'main'
            }, {
                name: 'SECONDARY.TITLE',
                link: 'secondary'
            }];
    }
    return MenuItems;
})();
/**
 * Menu Items
 * @type {angular.module}
 */
angular.module('socially.layout')
    .service('MenuItems', MenuItems);
//# sourceMappingURL=menu.service.js.map