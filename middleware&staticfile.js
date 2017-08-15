var express = require('express');

var app = express();

app.set('view engine', 'ejs');

// Middleware & static file
app.use('/assets', express.static('stuff'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(3000, () => {

});