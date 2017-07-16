angular.module('photobrand.account', [])
.controller('AccountController', function($scope, $location, $window, Auth) {
  $(window).on('load',function(){
        $('#authenticate').modal('show');
    });
  $scope.token = $window.localStorage.access_token || '';
  $scope.signin = function(username, password) {
    let data = {
      username: username,
      password: password
    };
    Auth.signin(data)
      .then(function(user) {
        if(user === undefined) {
          alert('no username found!');
        } else {
          $window.localStorage.setItem('access_token', user.token);
          $('#authenticate').modal('hide');
          $location.path('/profile');
        }
      })
      .catch(function(err) {});
  };
});