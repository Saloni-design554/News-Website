const express = require('express');
const router = express.Router();
const LatestNewsController = require('../controllers/latestNews.controller')
const {jwtVerify, roleAuth} = require('../middleware/jwt');
const {uploadSingleImage} = require('../middleware/fileUploading');

// Create latest route

/**
 * @swagger
 * /api/latest/create:
 *   post:
 *     tags:
 *       - Latest News
 *     summary: Create a new Latest news
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
 *                 description: Description of the Latest news
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image file for the Latest news
 *             required:
 *               - text
 *               - image
 *     responses:
 *       201:
 *         description: Latest news created successfully
 *       400:
 *         description: Bad request (validation error)
 *       500:
 *         description: Internal server error
 */
router.post("/latest/create", uploadSingleImage, jwtVerify, roleAuth("admin"), LatestNewsController.createLatestNews);

// Get latest news route
/**
 * @swagger
 * /api/latest/{id}:
 *   get:
 *     tags:
 *       -  Latest News
 *     summary: Find a Latest news by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the Latest news
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
router.get('/latest/:id', LatestNewsController.getLatestNews);


// Getall latest news route

/**
 * @swagger
 * /api/latest:
 *   get:
 *     tags:
 *       -  Latest News
 *     summary: 'Get all latest news'
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

router.get('/latest', LatestNewsController.getAllLatestNews);


// Update latest news route

/**
 * @swagger
 * /api/latest/update/{id}:
 *   put:
 *     tags:
 *       - Latest News
 *     summary: 'Update latest news'
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
 *                 description: Image file for the latest news
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

router.put('/latest/update/:id', uploadSingleImage, jwtVerify, roleAuth("admin"), LatestNewsController.updateLatestNews);


// Delete latest news route

/**
 * @swagger
 * /api/latest/delete:
 *   delete:
 *     tags:
 *       -  Latest News
 *     summary: 'Delete latest news'
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
router.delete('/latest/delete', jwtVerify, roleAuth("admin"), LatestNewsController.destroyLatestNews);

module.exports = router
