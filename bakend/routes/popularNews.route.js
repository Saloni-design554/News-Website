const express = require('express');
const router = express.Router();
const PopularNewsController = require('../controllers/popularNews.controller');
const {jwtVerify, roleAuth} = require('../middleware/jwt');
const {uploadSingleImage} = require('../middleware/fileUploading');

// Create popular news route

/**
 * @swagger
 * /api/popular/create:
 *   post:
 *     tags:
 *       - Popular News
 *     summary: Create a new popular news
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: Description of the popular news
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image file for the popular news
 *             required:
 *               - text
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Bad request (validation error)
 *       500:
 *         description: Internal server error
 */
router.post("/popular/create", uploadSingleImage, jwtVerify, roleAuth("admin"), PopularNewsController.createPopularNews);

// Get popular news route
/**
 * @swagger
 * /api/popular/{id}:
 *   get:
 *     tags:
 *       -  Popular News
 *     summary: Find a popular news by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the popular
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
router.get('/popular/:id', PopularNewsController.getPopularNews);


// Getall popular news route

/**
 * @swagger
 * /api/popular:
 *   get:
 *     tags:
 *       -  Popular News
 *     summary: 'Get all popular news'
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

router.get('/popular', PopularNewsController.getAllPopularNews);


// Update popular news route

/**
 * @swagger
 * /api/popular/update/{id}:
 *   put:
 *     tags:
 *       - Popular News
 *     summary: 'Update popular news'
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
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "hi there"
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image file for the category
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

router.put('/popular/update/:id', uploadSingleImage, jwtVerify, roleAuth("admin"), PopularNewsController.updatePopularNews);


// Delete popular news route

/**
 * @swagger
 * /api/popular/delete:
 *   delete:
 *     tags:
 *       -  Popular News
 *     summary: 'Delete popular news'
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
router.delete('/popular/delete', jwtVerify, roleAuth("admin"), PopularNewsController.destroyPopularNews);

module.exports = router
