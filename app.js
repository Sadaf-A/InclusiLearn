// Imports
const express = require('express');
const app = express();
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

app.post('/register', (req, res) => {
    res.render('registeration');
});

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`));