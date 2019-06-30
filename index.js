const express = require("expressjs");
const app = express();
const router = require('./server/router/index');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', mainPage);
app.use(router);




app.listen(3113);