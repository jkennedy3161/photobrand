// import external modules
import _ from 'lodash';

// import internal scripts

// set config object
let config = {
  port: process.env.PORT || 8080,
  db: {url: 'mongodb://127.0.0.1:27017/photobrand'}
};

module.exports = config;