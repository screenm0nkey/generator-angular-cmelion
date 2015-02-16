'use strict';

describe('Component: <%= cameledName %>Component', function () {

    describe('Directive: <%= cameledName %>Component', function () {
        var element, scope, $compile;

        beforeEach(function () {
            module('<%= scriptAppName %>');

            inject(function ($rootScope, _$compile_) {
                scope = $rootScope.$new();
                $compile = _$compile_;
            });
        });

        //id.substr(id.lastIndexOf('/') + 1)
        it('should have the component class', function () {
            element = angular.element('<<%= componentName %>></<%= componentName %>>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element).toHaveClass('<%= componentName %>');
        });
    });

    describe('Controller: <%= cameledName %>ComponentCtrl', function () {
        var Ctrl, scope, element;

        beforeEach(function () {
            module('<%= scriptAppName %>');

            inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
                element = angular.element('<<%= componentName %></<%= componentName %>>');
                Ctrl = $controller('<%= cameledName %>ComponentCtrl', {
                    $scope: scope,
                    $element: element
                });
            });
        });
    });
});
