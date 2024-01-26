const db = require("./db.config.js");
const { DataTypes } = require("sequelize");

// Include all models here
const Book = require("../app/models/book.model")(db.sequelize, DataTypes);
const Author = require("../app/models/author.model")(db.sequelize, DataTypes);
const Category = require("../app/models/category.model")(
  db.sequelize,
  DataTypes
);

Book.belongsTo(Author, { foreignKey: "author_id", as: "author" });
Book.belongsToMany(Category, {
  through: "BookCategory",
  foreignKey: "book_id",
  as: "categories",
});

db.books = Book;
db.authors = Author;
db.categories = Category;

module.exports = db;
