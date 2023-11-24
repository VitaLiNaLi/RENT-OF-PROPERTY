const router = require('express').Router();

// // Views
const authViewRouter = require('./view/auth.routes');

const categoryViewRouter = require('./views/category.routes');

const userViewRouter = require('./views/user.routes')



const authApiRouter = require('./api/api.user.routes');

const adminApiRouter = require('./api/api.admin.routes');


// // Endpoint Protection

router.use('/auth', authViewRouter);
router.use('/', categoryViewRouter);
router.use('/user', userViewRouter);

router.use('/api/auth', authApiRouter);

router.use('/admin', adminApiRouter);


module.exports = router;
