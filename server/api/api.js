let router = require('express').Router();

let userRouter = require('./routes/userRoutes')

router.use('/users', userRouter);

module.exports = router;