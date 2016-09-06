LanguageApp.controller('mainCtrl', function ($scope, $ionicModal, $ionicSideMenuDelegate, $ionicPlatform, $rootScope) {
  
  $ionicSideMenuDelegate.canDragContent(false);
  //by Default, the language is English
  $scope.selectedLanguage = "English";
  //On click of Go Button, set the language and go to selected language view
  $scope.GoToSelectedLanguageView = function (selectedLanguage) {
    $scope.selectedLanguage = selectedLanguage;
    console.log(selectedLanguage);
   // $window.location.href = ("views/Language.html?ln=" + selectedLanguage);
  };

})
