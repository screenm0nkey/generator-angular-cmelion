(function(){
  'use strict';

  angular.module('<%= scriptAppName %>.components')
      .controller('<%= cameledName %>ComponentCtrl', controllerFunction)
      .component('<%= cameledName %>', componentFunction);

  function controllerFunction ($scope, $element) {
    var vm = this;
    vm.text = 'this is the <%= cameledName %> component';
  }

  function componentFunction () {
    return {
      //overrides
      templateUrl: '<%= viewTemplateUrl %>',
      controller: '<%= cameledName %>ComponentCtrl',
      controllerAs: 'vm'
    };
  }

}());

