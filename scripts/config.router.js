'use strict';

angular
    .module('GridApp')
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$on('$stateChangeSuccess', function () {
                window.scrollTo(0, 0);
            });
        },
    ])
    .config(['$stateProvider', '$urlRouterProvider','$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {

            // For unmatched routes
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
            $urlRouterProvider.otherwise('/');

            // Application routes
        }
    ]);
