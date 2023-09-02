const express = require('express');
const app = express();
var server = require('http').Server(app);
const port = 5000;
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('index', { text: 'Hey' });
});

app.get('/about', (req, res) => {
   res.render('about', { text: 'about'});
});

const registrationRoutes = require('./routes/registrationRoutes'); 
app.use('/', registrationRoutes); 

server = app.listen(port);