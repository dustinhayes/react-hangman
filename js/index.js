var React = require('react'),
    Hangman = require('./components/Hangman'),
    clientActions = require('./actions/clientActions');

/**
 * Make a call to the API and call action with the data received.
 */
clientActions.startGame();

/**
 * Render the Hangman component into #app-mount
 */
React.render(<Hangman />, document.getElementById('app-mount'));
