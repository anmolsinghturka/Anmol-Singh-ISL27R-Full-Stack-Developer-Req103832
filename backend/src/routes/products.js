const express = require("express");
const router = express.Router();

// Import the product-related routes
const createProduct = require("./products/createProduct");
const deleteProductById = require("./products/deleteProductById");
const getAllProducts = require("./products/getAllProducts");
const getProductById = require("./products/getProductById");
const updateProductById = require("./products/updateProductById");

// Mount the product-related routes
router.use("/", createProduct);
router.use("/", deleteProductById);
router.use("/", getAllProducts);
router.use("/", getProductById);
router.use("/", updateProductById);

module.exports = router;
