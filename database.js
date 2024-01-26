const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // ganti dengan username database Anda
  password: "secret", // ganti dengan password database Anda
  database: "bookstore",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

module.exports = db;
