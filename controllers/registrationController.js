const formidable = require('formidable');
const registrationService = require('../services/RegistrationService');

exports.getRegistrationForm = (req, res) => {
  res.render('registration');
};

exports.registerUser =  (req, res) => {
    const form = new formidable.IncomingForm();   
    form.parse(req, (err, fields, files) => {
     if (err) {
       console.error(err);
       return res.status(500).json({ error: 'Error parsing form data' });
     }
 
     const { username, password } = fields;
 
     res.json({ message: 'Form data received successfully', username, password });
   });
};
