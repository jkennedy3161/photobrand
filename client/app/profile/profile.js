angular.module('photobrand.profile', [])
.controller('ProfileController', function($scope, Auth, $window, Profile, $location) {
  $scope.token = $window.localStorage.getItem('access_token');
  $scope.user = {};
  $scope.myImage='';
  $scope.myCroppedImage = '';
  $scope.myProfile;
  $scope.userId = function() {
    Auth.me($scope.token)
      .then(function(user) {
        $scope.user = user;
        $window.localStorage.setItem('userId', user._id);
      })
      .then(function() {
        Profile.getProfile()
          .then(function(userProfile) {
            console.log(userProfile);
            if(userProfile) {
              $scope.myProfile = userProfile;
              $('.modal-backdrop').hide();
              $('#profile').modal('hide');
            } else {
              $('.modal-backdrop').hide();
              $('#profile').modal('show');
            }
          });
      });
  };

  $scope.uploadProfile = function(firstName, lastName, email, studioName) {
    let profile = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      avatar: $scope.myCroppedImage,
      studioName: studioName,
      account: $window.localStorage.getItem('userId')
    };
    Profile.saveProfile(profile)
      .then(function(result) {
        console.log(result);
        $scope.myProfile = result;
        $('#profile').modal('hide');
      });
  };
    var handleFileSelect = function(evt) {
      var file = evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function(evt) {
        $scope.$apply(function($scope) {
          $scope.myImage = $scope.myCroppedImage = evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };

    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

    $scope.signout = function() {
      $window.localStorage.clear();
      $location.path('/');
    };
});