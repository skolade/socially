///<reference path="../../../../typings/typings.d.ts" />
var DbSidebarCtrl = (function () {
    function DbSidebarCtrl(Toggler, MenuItems) {
        this.Toggler = Toggler;
        this.MenuItems = MenuItems;
    }
    return DbSidebarCtrl;
})();
DbSidebarCtrl.$inject = ['Toggler', 'MenuItems'];
function dbsidebar() {
    return {
        templateUrl: 'client/components/dblayout/dbsidebar/dbsidebar.ng.html',
        controllerAs: 'dbsideNav',
        controller: DbSidebarCtrl
    };
}
/**
 * Sidebar
 * @type {angular.module}
 */
angular.module('socially.layout')
    .directive('sociallyDbSidebar', dbsidebar);
//# sourceMappingURL=sidebar.js.map
