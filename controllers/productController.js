const connection = require("../db");

const productController = {
  getAllProducts: function (req, res) {
    connection.connect(function (error) {
      if (error) throw error;
      console.log("Tenemos acceso a la BD");
    });
    connection.query("SELECT * FROM products", function (error, products) {
      if (error) throw error;
      res.render("home", { products });
    });
    // connection.end();
  },
};

module.exports = productController;

/*

ALTERNATIVA CON "db_alternative.js"

const customQuery = require(""../db)

const productController = {
  getAllProducts: function (req, res) {
    customQuery("SELECT * FROM products", function(req, res) {
      res.render("home")
    })
  },
};

*/
