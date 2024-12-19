const express = require('express');
const router = express.Router();
const Categorycontroller = require('../controllers/category.controller');
const {jwtVerify, roleAuth} = require('../middleware/jwt');
const {uploadSingleImage} = require('../middleware/fileUploading');

// Create news category route

/**
 * @swagger
 * /api/category/create:
 *   post:
 *     tags:
 *       - News Category
 *     summary: Create a new category
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *                 description: Name of the category
 *               text:
 *                 type: string
 *                 description: Description of the category
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image file for the category
 *               isStatus:
 *                 type: boolean
 *                 description: Status of the category
 *             required:
 *               - categoryName
 *               - isStatus
 *               - text
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Bad request (validation error)
 *       500:
 *         description: Internal server error
 */
router.post("/category/create", uploadSingleImage, jwtVerify, roleAuth("admin"), Categorycontroller.createCategory);


// Get news category route
/**
 * @swagger
 * /api/category/{id}:
 *   get:
 *     tags:
 *       -  News Category
 *     summary: Find a category by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the category
 *         required: true
 *         schema:
 *           type: string
 *         example: hs-no-35-mohali-address
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Blog post not found
 *       '500':
 *         description: Internal Server Error
 */
router.get('/category/:id', Categorycontroller.getCategory);


// Getall news category route

/**
 * @swagger
 * /api/category:
 *   get:
 *     tags:
 *       -  News Category
 *     summary: 'Get all Categories'
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Authorization Failure
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */

router.get('/category', Categorycontroller.getAllCategories);


// Update news category route

/**
 * @swagger
 * /api/category/update/{id}:
 *   put:
 *     tags:
 *       - News Category
 *     summary: 'Update category'
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: "642d0bb29daf22457f18685f"
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *                 example: "Category Name"
 *               text:
 *                 type: string
 *                 example: "hi there"
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image file for the category
 *               isStatus:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Authorization Failure
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */

router.put('/category/update/:id', uploadSingleImage, jwtVerify, roleAuth("admin"), Categorycontroller.updateCategory);


// Delete news category route

/**
 * @swagger
 * /api/category/delete:
 *   delete:
 *     tags:
 *       -  News Category
 *     summary: 'Delete category'
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "642d0bb29daf22457f18685f"
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Authorization Failure
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */
router.delete('/category/delete', jwtVerify, roleAuth("admin"), Categorycontroller.destroyCategory);

module.exports = router
