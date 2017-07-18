let profileController = require('../controllers/profileController');
let router = require('express').Router();
let auth = require('../../auth/auth');

let checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', profileController.params);

router.route('/')
  .get(checkUser, profileController.get)
  .post(checkUser, profileController.post);

module.exports = router;