(function () {
    'use strict';

    angular.module('<%= componentModuleName %>')
        .controller('<%= componentCtrlName %>', controllerFunction)
        .component('<%= cameledName %>', componentFunction);

    function controllerFunction($scope, $element, $attrs) {
        var vm = this;
        vm.text = 'this is the <%= cameledName %> component';
    }

    function componentFunction() {
        return {
            templateUrl: '<%= templateUrl %>'
        };
    }
}());

