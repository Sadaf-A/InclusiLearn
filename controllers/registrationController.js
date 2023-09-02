const formidable = require('formidable');
// registrationController.js
const registrationService = require('../services/RegistrationService');

// Handle GET request for the registration form
exports.getRegistrationForm = (req, res) => {
  res.render('registration');
};

// Handle POST request for registration
exports.registerUser =  (req, res) => {
    const form = new formidable.IncomingForm();   
    form.parse(req, (err, fields, files) => {
     if (err) {
       console.error(err);
       return res.status(500).json({ error: 'Error parsing form data' });
     }
 
     // Access form fields in `fields` object
     const { username, password } = fields;
 
     res.json({ message: 'Form data received successfully', username, password });
   });
};
