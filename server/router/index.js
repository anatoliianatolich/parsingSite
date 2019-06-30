const routers = require('expressjs').Router();
const parseRozetka = require('./method/parseRozetka');

routers
    .get('/', mainPage)
    .get('/parseRozetka', parseRozetka)


module.exports = routers;