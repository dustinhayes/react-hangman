var http = require('browser-request'),
    serverActions = require('../actions/serverActions');

var api = {

    /**
     * Call the api to receive new secrete data. Then call an action with
     * the new data.
     */
    getRandomSecrete: function () {
        http.get('/secrete/random/?length=8', function (req, res, bod) {
            var secreteData = JSON.parse(bod);

            serverActions.receivedRandomSecrete(secreteData);
        });
    }

};

module.exports = api;
