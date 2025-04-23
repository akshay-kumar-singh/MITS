const express = require('express');
const router = express.Router();
const { sendEmailToVendors } = require('../controllers/emailController');

router.post('/send', sendEmailToVendors);

module.exports = router;
