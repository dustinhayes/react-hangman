var dispatcher =require('../dispatcher/dispatcher'),
    actionTypes = require('../constants/actionTypes');

var serverActions = {

    /**
     * Once the server responds with the data dispatch it to any stores that
     * may be listening for it.
     */
    receivedRandomSecrete: function (secreteData) {
        dispatcher.emit(actionTypes.RECEIVED_RANDOM_SECRET, secreteData);
    }

};

module.exports = window.serverActions = serverActions;
