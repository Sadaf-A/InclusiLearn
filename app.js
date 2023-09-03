const express = require('express');
const session = require('express-session');
const app = express();
var server = require('http').Server(app);
const bodyParser = require('body-parser');
const port = 5000;

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sadaf20043006:1310Pota2@inclusilearn.wxnsdvc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation

app.use(
    session({
      secret: 'your-secret-key', // Replace with a strong secret key
      resave: false,
      saveUninitialized: false,
    })
  );

app.get('/about', (req, res) => {
    res.render('about', { check: 'about', name: "new"});
 })
 
// app.get('/login', (req, res) => {
//     res.render('login', { check: 'login', name: "new"});
// })

app.get('/homepage', (req, res) => {
    res.render('homepage', { check: 'homepage', name: "new"});
})
 
app.get('/chat', (req, res) => {
    res.render('chat', { check: 'chat', name: "new"});
})
 
app.get('/search', (req, res) => {
    const searchValue = req.query.search; 
    const name = "new"; 
    res.render('afterSearch', { search: searchValue, name: name });
});
 
app.get('/messageList', (req, res) => {
    res.render('messageList', { check: 'messageList', name: "new"});
})
         
app.get('/myPost', (req, res) => {
    res.render('myPost', { check: 'myPost', name: "new"});
})
 
app.get('/profile', (req, res) => {
    const name = req.query.name;
    res.render('profile', { check: 'profile', name: name});
})

app.get('/upload', (req, res) => {
    res.render('upload', { name: "random"});
})

const registrationRoutes = require('./routes/registrationRoutes'); 
app.use('/', registrationRoutes); 

const loginRoutes = require('./routes/loginRoutes');
app.use('/', loginRoutes);

const uploadRoutes = require('./routes/uploadPostRoutes');
app.use('/', uploadRoutes);

server = app.listen(port);