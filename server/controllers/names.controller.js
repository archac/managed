const Name = require('../models/name.model');

module.exports = {
    filter,
}

function filter(err, res) {
	//res.status(200);
    //res.json({ workingfromcontroller: true });
    //res.end();
    Name.find(function (err, names) {
        res.json(names);
    });
}
