const express = require('express');
const { getAllUsers, getAllTransactions } = require('../services/adminService');
const authMiddleware = require('../middleware/authMiddleware');
<<<<<<< HEAD
const authorizationMiddleware = require('../middleware/authorizationMiddleware');
=======
>>>>>>> 8ae95fbf (Create adminRoutes.js)

const router = express.Router();

// Route to get all users
<<<<<<< HEAD
router.get('/users', authMiddleware, authorizationMiddleware(['admin']), getAllUsers);

// Route to get all transactions
router.get('/transactions', authMiddleware, authorizationMiddleware(['admin']), getAllTransactions);
=======
router.get('/users', authMiddleware, getAllUsers);

// Route to get all transactions
router.get('/transactions', authMiddleware, getAllTransactions);
>>>>>>> 8ae95fbf (Create adminRoutes.js)

module.exports = router;
