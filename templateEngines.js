/*
    /views/profile.ejs
    /views/profile2.ejs
*/


//////////////////////////////////////

var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

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