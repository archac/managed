const config = require('./config/config');
const fs = require('fs');
const app = require('./config/express');
const https = require('https');
const privateKey = fs.readFileSync('ssl/62418226_localhost.key');
const certificate = fs.readFileSync('ssl/62418226_localhost.cert');
const credentials = { key: privateKey, cert: certificate }
const namesRoutes = require('./routes/names.route');
const mongoose = require('./config/mongoose');

const server = https.createServer(credentials, app);

server.listen(config.port, () => {
	console.log(`server started on port: ${config.port}`);
});

module.exports = app;