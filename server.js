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
 * Pull in the secrets data
 */
var secrets = JSON.parse(fs.readFileSync('./secrets.json'));

/**
 * Set up the api
 */
app.get('/secret/random', function (req, res) {
    /**
     * Find a random category
     */
    var category = sample(Object.keys(secrets));
        
    /**
     * Find a random secret in the found category. Filter the secrets that
     * are greater than res.query.length and don't contain a '.' or '-'.
     * Set the secret to all lowercase.
     */
    var secret = (sample(secrets[category].filter(function (secret) {
        return secret.length > req.query.length &&
            ! contains(secret, '.') && ! contains(secret, '-');
    }))).toLowerCase();

    /**
     * Send the secret data as the response.
     */
    res.send({
        category: category,
        secret: secret
    });
});

/**
 * Start the server on port 3000
 */
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Listening on port:", PORT);
});