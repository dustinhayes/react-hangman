var http = require('browser-request'),
    serverActions = require('../actions/serverActions');

var api = {

    /**
     * Call the api to receive new secret data. Then call an action with
     * the new data.
     */
    getRandomSecret: () => {
        http.get('/secret/random/?length=8', (req, res, bod) => {
            var secretData = JSON.parse(bod);

            serverActions.receivedRandomSecret(secretData);
        });
    }

};

module.exports = api;
