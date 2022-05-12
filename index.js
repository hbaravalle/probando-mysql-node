require("dotenv").config();

const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("¡Tenemos acceso a la base de datos!");
  }
});

app.get("/usuarios", function (req, res) {
  connection.query("SELECT * FROM users", function (error, users) {
    if (error) {
      throw error;
    } else {
      res.render("home", { users });
    }
  });
});

app.get("/usuarios/crear", function (req, res) {});

app.post("");

app.listen(port, function () {
  console.log(
    `http://localhost:${port}`,
    `Servidor corriendo en el puerto ${port}`
  );
});
