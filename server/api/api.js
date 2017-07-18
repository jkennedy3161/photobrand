let router = require('express').Router();

let userRouter = require('./routes/userRoutes')
let profileRouter = require('./routes/profileRoutes');

router.use('/users', userRouter);
router.use('/profile', profileRouter);

module.exports = router;