// Imports
const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/about', (req, res) => {
   res.render('about', { check: 'about', name: "new"});
})

app.get('/login', (req, res) => {
    res.render('login', { check: 'login', name: "new"});
 })

 app.get('/signup', (req, res) => {
    res.render('signup', { check: 'signup', name: "new"});
 })

 app.get('/homepage', (req, res) => {
    res.render('homepage', { check: 'homepage', name: "new"});
    })


// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))