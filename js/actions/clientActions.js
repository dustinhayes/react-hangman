var api = require('../utils/api'),
    dispatcher =require('../dispatcher/dispatcher'),
    actionTypes = require('../constants/actionTypes');

var clientActions = {

    /**
     * Make a call to the API for a random secrete.
     */
    startGame: function () {
        api.getRandomSecrete();
    },

    /**
     * Called when the user clicks on a letter to see if it's in the
     * secrete
     */
    tryLetter: function (letter) {
        dispatcher.emit(actionTypes.TRY_LETTER, letter);
    }

};

module.exports = clientActions;
