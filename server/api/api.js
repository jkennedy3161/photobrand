var router = require('express').Router();

var userRouter = require('./routes/userRoutes')

router.use('/users', userRouter);

module.exports = router;