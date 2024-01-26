const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database");

const router = express.Router();
router.use(bodyParser.json());

// Menampilkan seluruh data buku
router.get("/", (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Menampilkan data buku dengan id tertentu
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM books WHERE books.id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Menambahkan data buku baru
router.post("/", (req, res) => {
  const { title, author, year, price, author_id, category_id } = req.body;
  const sql =
    "INSERT INTO books (title, author, year, price, author_id, category_id) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [title, author, year, price, author_id, category_id],
    (err, result) => {
      if (err) throw err;
      res.send(`Book added with ID: ${result.insertId}`);
    }
  );
});

// Mengubah data buku dengan id tertentu
router.put("/:id", (req, res) => {
  const { title, author_id, category_id, year, price } = req.body;
  const sql = "UPDATE books SET *  WHERE id = ?";
  db.query(
    sql,
    [title, author_id, category_id, year, price, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.send(`Book modified with ID: ${req.params.id}`);
    }
  );
});

// Menghapus data buku dengan id tertentu
router.delete("/:id", (req, res) => {
  const sql = "DELETE FROM books WHERE id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(`Book deleted with ID: ${req.params.id}`);
  });
});

module.exports = router;
