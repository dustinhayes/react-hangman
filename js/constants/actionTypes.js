var keyprop = require('../lib/keyprop');

var actionTypes = keyprop([

    // Called when the user refreshes the browser or when the use clicks
    // the NewGame button.
    'START_GAME',

    // Called when the server response with new secrete data.
    'RECEIVED_RANDOM_SECRET',

    // Called when the user clicks on a letter on the LetterBoard.
    'TRY_LETTER'

]);

module.exports = actionTypes;
