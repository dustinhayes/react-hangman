var Store = require('../lib/Store'),
    contains = require('../lib/contains'),
    secretStore = require('./secretStore');

/**
 * Create accessors for the data
 */
var accessors = {
    /**
     * Filter through the letters played to pull out those found in the
     * secret string
     */
    lettersCorrect: {
        get: () => {
            var secret = secretStore.state.secret;

            return this.state.lettersPlayed.filter(function (letter) {
                return contains(secret, letter);
            });
        }
    },

    /**
     * Subtract the lettersPlayed from the letters correct
     */
    currentLevel: {
        get: () => {
            return this.state.lettersPlayed.length -
                this.lettersCorrect.length;
        }
    },

    /**
     * If all the letters in the secret can be found in the the letters
     * correct array, or we are on the 8th level, the game is over.
     */
    isGameOver: {
        get: () => {
            var secret = secretStore.state.secret;

            return Array.prototype.every.call(secret, letter => {
                return contains(this.lettersCorrect, letter) ||
                    letter === ' ';
            }, this) || this.currentLevel >= 8 ? true : false;
        }
    }
};

/**
 * Create a new store that holds our data.
 */
var GameStore = Store({
    lettersPlayed: []
}, accessors);

var dispatcher = require('../dispatcher/dispatcher'),
    actionTypes = require('../constants/actionTypes');

/**
 * When the user tries to play a new letter we need to update the letters
 * played.
 */
dispatcher.on(actionTypes.TRY_LETTER, letter => {
    GameStore.state.lettersPlayed.push(letter);

    GameStore.__setState__({
        lettersPlayed: GameStore.state.lettersPlayed
    });
});

/**
 * When we receive a new secret we want to reset the game state since it
 * depends on the new secret data
 */
dispatcher.on(actionTypes.RECEIVED_RANDOM_SECRET, () => {
    GameStore.__setState__({
        lettersPlayed: []
    });
});

module.exports = window.GameStore = GameStore;
