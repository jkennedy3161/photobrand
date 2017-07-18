// import external modules
import _ from 'lodash';

// import internal scripts
let jwt = require('../resources/secret');
let mongo = require('../resources/mongo');

// set config object
let config = {
  port: process.env.PORT || 1337,
  db: {url: mongo.URI},
  expireTime: '10d',
  secrets: {
    jwt: process.env.JWT || jwt.secret
  }
};

module.exports = config;