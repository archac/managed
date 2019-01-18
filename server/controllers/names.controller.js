const Name = require('../models/name.model');

module.exports = {
    filter,
}

function filter(err, res) {
    // pull the criteria off the query param if it exists,
    // otherwise default it to an empty string
     const criteria = err.query.criteria || '';

    // use the aggregate pipleine to concat the forename and surname together
    // then do a case insensitive match on the concatenated string using
    // the passed in criteria
    Name.aggregate([
        {$project: { "name" : { $concat: ["$forename", " ", "$surname"]}}},
        {$match: {"name": {"$regex": criteria, $options: "i"}}}
    ]).exec(function(err, names) {
        res.json(names);
    });
}
