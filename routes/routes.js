const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

// Rutas de usuario
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUser);

// Rutas de producto
router.get("/products", productController.getAllProducts);

module.exports = router;
