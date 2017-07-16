angular.module('photobrand.signup', [])
.controller('SignUpController', function($scope, Auth, $window, $location) {
  $scope.modal = function() {
    $('.modal-backdrop').hide();
    $('#authenticate').modal('show');
  };
  $scope.signup = function(username, password) {
    let data = {
      username: username,
      password: password
    };
    Auth.signup(data)
      .then(function(token) {
        $window.localStorage.setItem('access_token', token);
        $('#authenticate.modal').hide();
        $('.modal-backdrop').hide();
        $location.path('/profile');
      })
      .catch(function(err) {});
  };
});