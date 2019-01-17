const config = require('./config/config');
const app = require('./config/express');
const namesRoutes = require('./routes/names.route');
const mongoose = require('./config/mongoose');

app.listen(config.port, () => {
	console.log(`server started on port: ${config.port}`);
});

module.exports = app;