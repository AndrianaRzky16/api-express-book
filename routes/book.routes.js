const express = require("express");
const router = express.Router();
const bookController = require("../app/controllers/book.controller.js");
const authorController = require("../app/controllers/author.controller.js");
const categoryController = require("../app/controllers/category.controller.js");

router.get("/books", bookController.findAll);
router.get("/books/:id", bookController.findOne);
router.post("/books", bookController.create);
router.put("/books/:id", bookController.update);
router.delete("/books/:id", bookController.delete);

router.get("/authors", authorController.findAll);
router.get("/authors/:id", authorController.findOne);
router.post("/authors", authorController.create);
router.put("/authors/:id", authorController.update);
router.delete("/authors/:id", authorController.delete);

router.get("/categories", categoryController.findAll);
router.get("/categories/:id", categoryController.findOne);
router.post("/categories", categoryController.create);
router.put("/categories/:id", categoryController.update);
router.delete("/categories/:id", categoryController.delete);

module.exports = router;
