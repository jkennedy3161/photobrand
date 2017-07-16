// import external modules
import _ from 'lodash';

// import internal scripts
let jwt = require('../resources/secret');

// set config object
let config = {
  port: process.env.PORT || 8080,
  db: {url: 'mongodb://127.0.0.1:27017/photobrand'},
  expireTime: '10d',
  secrets: {
    jwt: process.env.JWT || jwt.secret
  }
};

module.exports = config;