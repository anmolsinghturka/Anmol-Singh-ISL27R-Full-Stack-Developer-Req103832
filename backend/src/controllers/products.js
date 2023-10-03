// Import the necessary product-related controller functions
const createProduct = require("./products/createProduct").createProduct;
const deleteProductById = require("./products/deleteProductById").deleteProductById;
const getAllProducts = require("./products/getAllProducts").getAllProducts;
const getProductById = require("./products/getProductById").getProductById;
const updateProductById = require("./products/updateProductById").updateProductById;

// Export the product-related controller functions
module.exports = {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById
};
