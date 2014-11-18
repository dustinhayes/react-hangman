var contains = require('./js/lib/contains'),
    sample = require('lodash.sample'),
    express = require('express'),
    fs = require('fs');

var app = express();

/**
 * Set the root url to respond with index.html
 */
app.use('/', express.static(__dirname));

/**
 * Pull in the secretes data
 */
var secretes = JSON.parse(fs.readFileSync('./secretes.json'));

/**
 * Set up the api
 */
app.get('/secrete/random', function (req, res) {
    /**
     * Find a random category
     */
    var category = sample(Object.keys(secretes));
        
    /**
     * Find a random secrete in the found category. Filter the secretes that
     * are greater than res.query.length and don't contain a '.' or '-'.
     * Set the secrete to all lowercase.
     */
    var secrete = (sample(secretes[category].filter(function (secrete) {
        return secrete.length > req.query.length &&
            ! contains(secrete, '.') && ! contains(secrete, '-');
    }))).toLowerCase();

    /**
     * Send the secrete data as the response.
     */
    res.send({
        category: category,
        secrete: secrete
    });
});

/**
 * Start the server on port 3000
 */
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Listening on port:", PORT);
});