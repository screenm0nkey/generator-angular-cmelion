'use strict';

angular.module('<%= scriptAppName %>')
    .config(function ($stateProvider, stateFactoryProvider) {
        $stateProvider.state('Index', stateFactoryProvider.$get()('Index', {url:'/'}))
    })
    .service('IndexCtrlInit', function ($q, $log, Restangular) {

        var _prepare = function () {
            $log.log("IndexCtrl loading");

            return $q.all([ Restangular.all('messages').getList() ]).then(function (messages) {
                $log.log("IndexCtrl loaded!");

                return {
                    messages: messages
                }
            });
        };

        return {
            prepare: _prepare
        }

    })
    .controller('IndexCtrl', function ($scope, init) {
        $scope.data = init;
    });
