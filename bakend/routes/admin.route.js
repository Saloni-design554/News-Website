const express = require('express');
const AdminController = require("../controllers/admin.controller")
const router = express.Router();
const {jwtVerify, roleAuth} = require("../middleware/jwt")

/**
 * @swagger
 * /api/signup:
 *   post:
 *     tags:
 *       - Admin 
 *     summary: Admin Signup
 *     description: Register a new admin by providing name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Admin User
 *               email:
 *                 type: string
 *                 example: admin@example.com
 *               password:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       201:
 *         description: Admin registered successfully
 *       400:
 *         description: Email already exists
 *       500:
 *         description: Server error
 */
router.post('/signup', AdminController.adminSignup);

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags:
 *       - Admin 
 *     summary: Admin Login
 *     description: Login an admin by providing email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@example.com
 *               password:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       200:
 *         description: Login successful and returns JWT token
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
router.post('/login', AdminController.adminLogin);

module.exports = router;
