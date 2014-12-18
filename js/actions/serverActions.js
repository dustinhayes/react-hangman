var dispatcher =require('../dispatcher/dispatcher'),
    actionTypes = require('../constants/actionTypes');

var serverActions = {

    /**
     * Once the server responds with the data dispatch it to any stores that
     * may be listening for it.
     */
    receivedRandomSecret: secretData => {
        dispatcher.emit(actionTypes.RECEIVED_RANDOM_SECRET, secretData);
    }

};

module.exports = serverActions;
