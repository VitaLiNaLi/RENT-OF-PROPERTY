const router = require('express').Router();
const MainPage = require('../../components/MainPage');
const { Category, Place } = require('../../db/models');

router.get('/', async (req, res) => {
  let allPlaces;
  if (Object.keys(req.query).length !== 0) {
    const { category1, category2, category3, priceText } = req.query;
    const cats = [category1, category2, category3].filter(el => el !== undefined).map(el => +el);
    if (cats.length !== 0) {
      allPlaces = await Place.findAll({where: {categoryId : cats}});
    } else { allPlaces = await Place.findAll() }
  } else { allPlaces = await Place.findAll(); }
  const allCategories = await Category.findAll();
  const html = res.renderComponent(MainPage, {
    title: 'Main',
    allCategories,
    allPlaces,
  });
  res.send(html);
});


module.exports = router;
