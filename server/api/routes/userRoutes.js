var router = require('express').Router();

var userController = require('../controllers/userController');

router.route('/')
  .get(userController.get);

module.exports = router;