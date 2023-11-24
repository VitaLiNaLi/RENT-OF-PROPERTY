const router = require('express').Router();
// const Home = require('../../components/Home');
// const Authorization = require('../../components/Authorization');
const Registration = require('../../components/Registration');
// const { ifAuthRedirect } = require('../../middleware/auth');
// const cookiesConfig = require('../../config/cookiesConfig');
const Authorization = require('../../components/Authorization');

// router.get('/', ifAuthRedirect('/dashboard'), (req, res) => {
//   const html = res.renderComponent(Home, { title: 'JWT Example: Home' });
//   res.send(html);
// });

// router.get('/auth', ifAuthRedirect('/dashboard'), (req, res) => {
//   const html = res.renderComponent(Authorization, { title: 'JWT Example: Auth' });
//   res.send(html);
// });

router.get('/registration', (req, res) => {
  const html = res.renderComponent(Registration, { title: 'Registration' });
  res.send(html);
});

router.get('/authorization', (req, res) => {
  const html = res.renderComponent(Authorization, { title: 'Authorization' });
  res.send(html);
});

// router.get('/logout', async (req, res) => {
//   try {
//     const { access } = req.cookies;

//     if (access) {
//       res.locals.user = {};
//       res
//         .clearCookie(cookiesConfig.refresh)
//         .clearCookie(cookiesConfig.access)
//         .redirect('/');
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// });

module.exports = router;