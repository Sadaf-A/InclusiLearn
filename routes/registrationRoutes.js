const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

// Handle GET request for the registration form
router.get('/register', registrationController.getRegistrationForm);

// Handle POST request for registration
router.post('/register', registrationController.registerUser);

module.exports = router;
