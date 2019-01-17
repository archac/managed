const app = require('../config/express');
const controller = require('../controllers/names.controller');

app.get('/names', controller.filter);