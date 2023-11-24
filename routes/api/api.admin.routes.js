const router = require("express").Router();
const cookiesConfig = require("../../config/cookiesConfig");

const { Place, Category, Photo } = require("../../db/models");
const Administration = require("../../components/Administration");
const Offcanvas = require("../../components/Offcanvas");
const AdminAdd = require("../../components/AdminAdd");
const AdminString = require("../../components/AdminString");

// ----------------------------------------------------------------------------------------------------

router.get("/", async (req, res) => {
  try {
    const places = await Place.findAll({ include: Photo });
    // console.log(places[0].Photos);
    const categories = await Category.findAll();

    const html = res.renderComponent(Administration, {
      title: "Administration",
      places,
      categories,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.status(500).send(message);
  }
});

// ----------------------------------------------------------------------------------------------------

router.delete("/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;
    const placeToDl = await Place.destroy({ where: { id } });

    if (placeToDl) {
      res.status(200).json({ message: "запись удалена" });
    } else {
      res.status(400).json({ message: "запись не удалена, повторите позднее" });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// ----------------------------------------------------------------------------------------------------

router.post("/add", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    console.log("00000000000000000000000000000000000000");
    // const file=reg.files?.homesImg
    // const arrUrl=await Promise.all(file.map(async(el) => await fileuploadMiddleware(el)))
    // arrUrl.forEach(el=> await Photos.create({product.id: place.id, url:el}))
    // const placeNew= await Place.findOne({include: Photos} {where: id});

    const placeToAdd = await Place.create({name, price: Number(price), description, categoryId:1, });

    const html = res.renderComponent(
      AdminAdd,
      { placeToAdd },
      { doctype: false }
    );
    if (placeToAdd) {
      res.status(200).json({ message: "запись внесена", html });
    } else {
      res.status(400).json({ message: "запись не внесена, повторите позднее" });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// ----------------------------------------------------------------------------------------------------

router.post("/update", async (req, res) => {
  try {
    const { id, name, price, description } = req.body;

    const placeToAdd = await Place.update(
      { name, price: Number(price), description },
      { where: { id } }
    );
    const place = await Place.findOne({id});
    console.log(place, 'oooooooooooooooooooooooooooooooo');

    const html = res.renderComponent(
      AdminString,
      { place },
      { doctype: false }
    );

    if (placeToAdd) {
      res
        .status(200)
        .json({ message: "запись измененв", update: true, html });
    } else {
      res.status(400).json({
        message: "запись не изменена, повторите позднее",
        update: false,
      });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// ----------------------------------------------------------------------------------------------------

router.post("/offcanvas", async (req, res) => {
  try {
    const place = req.body;
    console.log(place, "for drawing");

    const html = res.renderComponent(Offcanvas, { place }, { doctype: false });
    res.status(200).json({ html });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// ----------------------------------------------------------------------------------------------------

router.get("/add/&", async (req, res) => {
  try {
    const categories = await Category.findAll();
    const html = res.renderComponent(AdminAdd, categories, { doctype: false });
    res.status(200).json({ html });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
