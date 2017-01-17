'use strict';

angular
  .module('GridApp')
  .controller('AppCtrl', ['$scope', '$http', '$stateParams',
        function AppCtrl($scope, $http, $localStorage) {

      $scope.mobileView = 767;

      $scope.app = {
        name: 'Grid',
        author: 'Roman',
        version: '1.0.0',
        year: (new Date()).getFullYear(),
        layout: {
          isSmallSidebar: false,
          isChatOpen: false,
          isFixedHeader: true,
          isFixedFooter: false,
          isBoxed: false,
          isStaticSidebar: false,
          isRightSidebar: false,
          isOffscreenOpen: false,
          isConversationOpen: false,
          isQuickLaunch: false,
          sidebarTheme: '',
          headerTheme: ''
        },
        isMessageOpen: false,
        isConfigOpen: false
      };

      $scope.user = {
        fname: 'Samuel',
        lname: 'Perkins',
        jobDesc: 'Human Resources Guy',
        avatar: 'images/avatar.jpg'
      };

    }
]);
