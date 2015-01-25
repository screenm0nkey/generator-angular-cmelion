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
        it('should have the component class', function() {
            element = angular.element('<<%= _.dasherize(name).substr(_.dasherize(name).lastIndexOf('/') + 1) %>-component></<%= _.dasherize(name).substr(_.dasherize(name).lastIndexOf('/') + 1) %>-component>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element).toHaveClass('<%= _.dasherize(name).substr(_.dasherize(name).lastIndexOf('/') + 1) %>-component');
        });

        it('should render text', function() {
            element = angular.element('<<%= _.dasherize(name).substr(_.dasherize(name).lastIndexOf('/') + 1) %>-component></<%= _.dasherize(name).substr(_.dasherize(name).lastIndexOf('/') + 1) %>-component>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element.text()).toContain('<%= cameledName %>');
        });

    });

    describe('Controller: <%= cameledName %>ComponentCtrl', function () {

        var Ctrl, scope, element;

        beforeEach(function () {

            module('<%= scriptAppName %>');

            inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
                element = angular.element('<<%= _.dasherize(name).substr(_.dasherize(name).lastIndexOf('/') + 1) %>-component></<%= _.dasherize(name).substr(_.dasherize(name).lastIndexOf('/') + 1) %>-component>');
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
