var Store = require('../lib/Store');

/**
 * Create a new store that holds our data.
 */
var SecreteStore = Store({
    secrete: '',
    category: ''
});

var dispatcher = require('../dispatcher/dispatcher'),
    actionTypes = require('../constants/actionTypes');

/**
 * Listen for new data from the server. When it comes in update SecreteStore
 * accordingly. We should only ever call __setState__ from the with a Store file.
 */
dispatcher.on(actionTypes.RECEIVED_RANDOM_SECRET, SecreteStore.__setState__);

module.exports = SecreteStore;
