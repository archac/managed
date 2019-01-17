const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongoHost, { keepAlive: 1});
mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to database ${config.mongoHost}`);
});

// mongoose debug logging
mongoose.set('debug', (collectionName, method, query, doc) => {
    console.log(`${collectionName}.${method}`, query, doc);
  });
