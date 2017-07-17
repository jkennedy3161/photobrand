angular.module('photobrand.profile', [])
.controller('ProfileController', function($scope, Auth, $window, Upload, $timeout) {
  $scope.token = $window.localStorage.getItem('access_token');
  $scope.user = {};
  $scope.myImage='';
  $scope.myCroppedImage = '';
  $scope.userId = function() {
    $('.modal-backdrop').hide();
    $('#profile').modal('show');
    Auth.me($scope.token)
      .then(function(user) {
        $scope.user = user;
        $window.localStorage.setItem('userId', user._id);
      })
  };

  $scope.uploadPic = function(file) {
    // upload image to server
  };
    var handleFileSelect = function(evt) {
      var file = evt.currentTarget.files[0];
      //console.log(file.target.files[0]);
      var reader = new FileReader();
      reader.onload = function(evt) {
        $scope.$apply(function($scope) {
          $scope.myImage = $scope.myCroppedImage = evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };

    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
});