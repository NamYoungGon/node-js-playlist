var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

/*
    Middleware & static file
*/
app.use('/assets', express.static('stuff'));

app.get('/', (req, res) => {
    res.render('index'); 
});

/*
    Query Strings

    ex: http://127.0.0.1:3000/contact?dept=marketing&person=joe

    <p><%= qs.dept %></p>

    <form id="contact-form">
        <label for="who">Who do you want to contact?</label>
        <input type="text" name="who" value="<%= qs.person %>">
        <label for="department">Which department?</label>
        <input type="text" name="department" value="<%= qs.dept %>">
        <label for="email">Your email</label>
        <input type="text" name="email">
        <input type="submit" name="submit">
    </form>
*/
app.get('/contact', (req, res) => {
    res.render('contact', {qs: req.query});
});

/*
    Handling POST Request
*/
app.post('/contact', urlencodedParser, (req, res) => {
    res.render('contact-success', {data: req.body});
});

/*
    Express Route Param
*/
app.get('/profile/:name', (req, res) => {
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.get('/profile2/:name', (req, res) => {
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile2', {person: req.params.name, data: data});
});

app.listen(3000, () => {

});