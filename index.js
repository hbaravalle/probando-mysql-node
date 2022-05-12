const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ha_ejercicio_20",
  port: 3306, // Por defecto es este número...
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
