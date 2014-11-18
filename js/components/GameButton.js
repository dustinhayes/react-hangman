var React = require('react'),
    clientActions = require('../actions/clientActions');

var GameButton = React.createClass({
    render: function () {
        return (
            <button className="GameButton" onClick={this._startNewGame}>
                New Game
            </button>
        );
    },

    _startNewGame: function () {
        clientActions.startGame();
    }
});

module.exports = GameButton;
