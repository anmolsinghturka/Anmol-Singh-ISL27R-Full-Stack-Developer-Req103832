const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/products");

/**
 * @swagger
 * /product/{contactId}:
 *   delete:
 *     tags:
 *       - Contacts
 *     summary: Delete a contact by ID
 *     description: Delete an existing product by ID
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product to delete
 *     responses:
 *       200:
 *         description: The deleted contact
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Contact with ID {contactId} not found
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
router.delete("/:contactId", productsController.deleteProductById);

module.exports = router;
