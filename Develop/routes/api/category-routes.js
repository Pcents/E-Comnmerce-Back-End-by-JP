const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const catData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products-this is done via the models index
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const catData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    if (!catData) {
      res.status(404).json({ message: "No categories with that ID" });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const catData = await Category.create(req.body);
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const catData = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (!catData) {
      res.status(404).json({ message: "can't update what doesn't exist" });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const catData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!catData) {
      res.status(404).json({ message: "can't delete what doesn't exist" });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
