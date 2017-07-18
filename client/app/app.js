angular.module('photobrand', [
  'photobrand.account',
  'photobrand.signup',
  'photobrand.profile',
  'photobrand.services',
  'ngFileUpload',
  'ngImgCrop',
  'ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/account/account.html',
      controller: 'AccountController'
    })
    .when('/signup', {
      templateUrl: 'app/signup/signup.html',
      controller: 'SignUpController'
    })
    .when('/profile', {
      templateUrl: 'app/profile/profile.html',
      controller: 'ProfileController'
    })
    .otherwise('/', {
      templateUrl: 'app/account/account.html'
    })
});