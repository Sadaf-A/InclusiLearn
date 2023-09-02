// Imports
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Use bodyParser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

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
    const { username, email, password } = req;
  
    res.send(`Registration successful for ${username}`);
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`));