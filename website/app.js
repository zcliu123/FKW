const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Us'});
});

app.get('/diet', (req, res) => {
    res.render('diet', {title: 'Why Diet'});
});

app.get('/researches', (req, res) => {
    res.render('researches', {title: 'Our Researches'});
});

app.get('/activities', (req, res) => {
    res.render('activities', {title: 'Activities'});
});

app.get('/research', (req, res) => {
    res.render('research_details', {title: 'Research name'});
});

