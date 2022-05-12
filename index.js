require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

// Archivos de rutas
const routes = require("./routes/routes");

app.set("view engine", "ejs");
app.use("/", routes);

app.listen(port, function () {
  console.log(
    `http://localhost:${port}`,
    `Servidor corriendo en el puerto ${port}`
  );
});
