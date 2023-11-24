const router = require('express').Router();
const UserPage = require('../../components/UserPage');
const { User, Place, Favorite, Photo } = require('../../db/models');

router.get('/favorites', async (req, res) => {
  const userId = res.locals.user.id;
  const allFavorites = await Favorite.findAll({
    where: { userFavoriteId: userId },
    include: [{ model: Place, include: [{ model: Photo }] }],
  });
  console.log(allFavorites);
  const html = res.renderComponent(UserPage, { title: 'Избранное', allFavorites });
  res.send(html);
});

module.exports = router;
