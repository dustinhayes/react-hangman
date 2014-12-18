var api = require('../utils/api'),
    dispatcher =require('../dispatcher/dispatcher'),
    actionTypes = require('../constants/actionTypes');

var clientActions = {

    /**
     * Make a call to the API for a random secret.
     */
    startGame: () => {
        api.getRandomSecret();
    },

    /**
     * Called when the user clicks on a letter to see if it's in the
     * secret
     */
    tryLetter: letter => {
        dispatcher.emit(actionTypes.TRY_LETTER, letter);
    }

};

module.exports = clientActions;
