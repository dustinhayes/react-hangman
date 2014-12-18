var Store = require('../lib/Store');

/**
 * Create a new store that holds our data.
 */
var SecretStore = Store({
    secret: '',
    category: ''
});

var dispatcher = require('../dispatcher/dispatcher'),
    actionTypes = require('../constants/actionTypes');

/**
 * Listen for new data from the server. When it comes in update secretStore
 * accordingly. We should only ever call __setState__ from the with a Store file.
 */
dispatcher.on(actionTypes.RECEIVED_RANDOM_SECRET, SecretStore.__setState__);

module.exports = SecretStore;
