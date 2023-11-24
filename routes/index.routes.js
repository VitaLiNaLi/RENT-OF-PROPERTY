const router = require('express').Router();

// // Views
const authViewRouter = require('./view/auth.routes');
// const profileViewRouter = require('./views/profile.routes');
// const categoryViewRouter = require('./views/category.routes');
// const usersViewRouter = require('./views/users.routes');
// const productsViewRouter = require('./views/products.routes');
// const orderViewRouter = require('./views/order.routes');

// // API
const authApiRouter = require('./api/api.user.routes');
// const usersApiRouter = require('./api/users.api.routes');

// // Endpoint Protection
// const { rejectIfNotAuthorized } = require('../middleware/auth');

router.use('/', authViewRouter);
// router.use('/products', productsViewRouter);
// router.use('/orders', orderViewRouter);
// router.use('/profile', profileViewRouter);
// router.use('/', categoryViewRouter);
// router.use('/users', usersViewRouter);
// router.use('/auth/api', authApiRouter);
router.use('/api/auth', authApiRouter);

module.exports = router;