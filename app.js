const express = require('express');
//const exphbs = require('express-handlebars');
//const expressHandlebars = require('express-handlebars');

const bodyParser = require('body-parser');
const session = require('express-session');

const mysql = require('mysql');
//var path = require('path')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret:'weblesson',
    resave:'true',
    saveUninitialized: true
}));
//app.engine('hbs', exphbs.engine({ extname: '.hbs' }));


app.set('view engine', 'ejs');
//Router
app.get('/', (req, res) => {
    
    console.log("Connected............")
    
    res.render("../views/main");


});
app.get('/login', (req, res) => {
    res.render('teacher');
});

const routes = require('./routes/user');
app.use('/', () => routes);




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
