angular.module('photobrand.profile', [])
.controller('ProfileController', function($scope, Auth, $window) {
  $scope.token = $window.localStorage.getItem('access_token');
  $scope.user = {};
  $scope.userId = function() {
    Auth.me($scope.token)
      .then(function(user) {
        $scope.user = user;
        $window.localStorage.setItem('userId', user._id);
      })
  };
});