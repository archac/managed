const express = require('express');
const app = express();

app.listen(8080, () => {
	console.log('server started on port: 8080');
});

module.exports = app;