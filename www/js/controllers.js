LanguageApp.controller('languageCtrl', function ($scope, $ionicModal, $ionicSideMenuDelegate, $ionicPlatform, $rootScope,$stateParams) {
  
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.selectedLanguage = $stateParams.lang_name;
  $rootScope.HeaderMessage = $stateParams.lang_name;
});
