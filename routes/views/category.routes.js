const router = require('express').Router();
const MainPage = require('../../components/MainPage');
const { Category, Place } = require('../../db/models');

router.get('/', async (req, res) => {
  const allCategories = await Category.findAll();
  const allPlaces = await Place.findAll();
  const html = res.renderComponent(MainPage, {
    title: 'Main',
    allCategories,
    allPlaces,
  });
  res.send(html);
});

module.exports = router;
