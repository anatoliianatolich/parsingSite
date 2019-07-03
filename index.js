const express = require("express");
const app = express();
const path = require('path');

const port  = 5050;

const bodyParser = require("body-parser");

// const mainPage = require("./server/router/method/mainPage");
// const router = require('./server/router/index');

console.log(path.join(__dirname, 'views'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('mainPage');
});

// app.use(router);


app.listen(port, ()=> {
    console.log("server run port "+ port);
});
