const express = require("express");
const router = express.Router();
const booksController = require("./books.js");

router.post("/", booksController.create);
router.get("/", booksController.findAll);
router.get("/:id", booksController.find);
router.put("/:id", booksController.update);
router.delete("/:id", booksController.remove);
//middleware para verificar si el libro existe antes de realizar una operación con él
