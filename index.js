const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const mainPage = require("./server/router/method/mainPage");
const router = require('./server/router/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', mainPage);
app.use(router);




app.listen(3113, ()=> {
    console.log("server run port 3113");
});
