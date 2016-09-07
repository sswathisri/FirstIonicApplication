LanguageApp.controller('AppCtrl', function ($scope, $ionicModal, $timeout, service, $rootScope, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.canDragContent(false);
  $rootScope.HeaderMessage = "Welcome To Learning Tree";
  $scope.HomeButtonClick = function () {
    $rootScope.HeaderMessage = "Welcome To Learning Tree";
    window.location.href = "#/app/main";
  };
});
