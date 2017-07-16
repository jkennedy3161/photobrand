// import external modules
import express from 'express';
let app = express();
import mongoose from 'mongoose';

// import internal scripts
let config = require('./config/config');
let err = require('./middleware/err');
let api = require('./api/api');
let auth = require('./auth/routes');

// handles serving static assets and returning json body from requests
require('./middleware/middleware')(app, express);

mongoose.Promise = global.Promise;
// connect to mongodb URI
mongoose.connect(config.db.url, { useMongoClient: true });

// setup routes
app.use('/api', api);
app.use('/auth', auth);

// global error handling middleware
app.use(err());

// export for testing
module.exports = app;