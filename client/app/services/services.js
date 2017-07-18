angular.module('photobrand.services', [])
.factory('Auth', ($http, $window) => {
  let signup = function(data) {
    return $http({
      method: 'POST',
      url: '/api/users',
      data: JSON.stringify(data),
      ContentType: 'application/json'
    })
    .then(function(res) {
      return res.data.token;
    })
  };
  let signin = function(data) {
    return $http({
      method: 'POST',
      url: '/auth/signin' ,
      data: data,
      headers: $window.localStorage.getItem('access_token'),
      ContentType: 'application/json'
    })
    .then(function(res) {
      return res.data;
    });
  };
  let me = function(token) {
    return $http({
      method: 'GET',
      url: '/api/users/me',
      params: {access_token: token},
      ContentType: 'application/json'
    })
    .then(function(res) {
      return res.data;
    });
  };

  return {
    signup: signup,
    signin: signin,
    me: me
  };
})
.factory('Profile', function($http, $window) {
  let saveProfile = function(data) {
    return $http({
      method: 'POST',
      url: '/api/profile',
      data: data,
      ContentType: 'application/json',
      params: {access_token: $window.localStorage.getItem('access_token')}
    })
    .then(function(res) {
      return res.data;
    });
  };

  let getProfile = function() {
    return $http({
      method: 'GET',
      url: '/api/profile',
      ContentType: 'application/json',
      params: {access_token: $window.localStorage.getItem('access_token')}
    })
    .then(function(res) {
      console.log(res.data);
      return res.data[0];
    });
  };

  return {
    saveProfile: saveProfile,
    getProfile: getProfile
  };
})