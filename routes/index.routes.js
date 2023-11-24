const router = require('express').Router();

// // Views
const authViewRouter = require('./view/auth.routes');
// const profileViewRouter = require('./views/profile.routes');
const categoryViewRouter = require('./views/category.routes');
// const usersViewRouter = require('./views/users.routes');
// const productsViewRouter = require('./views/products.routes');
// const orderViewRouter = require('./views/order.routes');


const authApiRouter = require('./api/api.user.routes');

const adminApiRouter = require('./api/api.admin.routes');


// // Endpoint Protection
// const { rejectIfNotAuthorized } = require('../middleware/auth');

router.use('/', authViewRouter);
router.use('/', categoryViewRouter);

router.use('/api/auth', authApiRouter);

router.use('/', adminApiRouter);


module.exports = router;
