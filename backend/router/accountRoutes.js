const express = require('express');
const router = express.Router();
const { createAccount, getAccounts } = require('../controllers/accountController');

// POST: Create a new account
router.post('/', createAccount);

// GET: Fetch all accounts
router.get('/', getAccounts);

module.exports = router;
