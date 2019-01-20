
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');



const expressServer = express();



expressServer.use(helmet());
expressServer.use(bodyParser.json());
expressServer.use(bodyParser.urlencoded({ extended: true}));
expressServer.use(cors());



// Setup cors to always require a preflight check and only allow GET requests
const corsOptions = {
    "origin": "http://localhost:4200",
    "methods": "GET",
    "preflightContinue": true,
    "optionsSuccessStatus": 204
}

// Handle pre flight requests for all end points
expressServer.options('*', cors(corsOptions));

module.exports = expressServer;