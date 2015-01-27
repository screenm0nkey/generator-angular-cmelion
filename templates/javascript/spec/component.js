'use strict';

describe('Component: <%= cameledName %>Component', function () {

    describe('Directive: <%= cameledName %>Component', function () {
        var element, scope, $compile;

        beforeEach(function () {
            module('<%= scriptAppName %>');
            module('<%= componentModuleName %>');

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

        it('should render text', function () {
            element = angular.element('<<%= componentName %></<%= componentName %>>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element.text()).toContain('<%= cameledName %>');
        });

    });

    describe('Controller: <%= cameledName %>ComponentCtrl', function () {
        var Ctrl, scope, element;

        beforeEach(function () {
            module('<%= scriptAppName %>');
            module('<%= componentModuleName %>');

            inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
                element = angular.element('<<%= componentName %></<%= componentName %>>');
                Ctrl = $controller('<%= cameledName %>ComponentCtrl', {
                    $scope: scope,
                    $element: element
                });
            });
        });

        it('should render a message', function () {
            expect(Ctrl.text).toEqual('this is the <%= cameledName %> component');
        });
    });
});
