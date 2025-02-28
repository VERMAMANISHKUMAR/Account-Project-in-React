const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

// Register user
router.post('/register', register);

// Login user
router.post('/login', login);

// Get logged in user
router.get('/user', auth, getUser);

module.exports = router;
