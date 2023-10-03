const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/products");

/**
 * @swagger
 *   tags:
 *   name: Contacts
 *   description: API contact management
 *
 * /product:
 *   get:
 *     tags:
 *       - Contacts
 *     summary: Get all contacts
 *     description: Retrieve a list of all contacts
 *     responses:
 *       200:
 *         description: A list of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: An unexpected error occurred
 */
router.get("/", productsController.getAllProducts);

module.exports = router;
