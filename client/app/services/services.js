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