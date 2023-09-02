const express = require('express');
const formidable = require('formidable');
const app = express();
var server = require('http').Server(app);
const port = 5000;
app.use(express.static('public'));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' });
});

app.get('/about', (req, res) => {
   res.render('about', { text: 'about'});
});

app.get('/register', (req, res) => {
    res.render('registration');
});

app.post('/register', (req, res) => { 
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
})

server = app.listen(port);