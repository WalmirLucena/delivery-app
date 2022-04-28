const { Router } = require('express');

const router = Router();

router.use('/login', userRouter);

module.exports = router;