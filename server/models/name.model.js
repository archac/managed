const mongoose = require('mongoose');

const NameSchema = new mongoose.Schema({
    forename: {
        type: String,
    },
    surname: {
        type: String,
    },
});

module.exports = mongoose.model('Name', NameSchema);