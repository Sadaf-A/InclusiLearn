// Imports
const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation

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
    res.render('profile', { check: 'profile', name: "new"});
    })
        
        


// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))