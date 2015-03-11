var React = require('react'),
    clientActions = require('../actions/clientActions');

var GameButton = React.createClass({
    componentDidMount: function () {
        this.getDOMNode().focus();
    },

    render: function () {
        return (
            <button tabIndex='1' className="GameButton" onClick={this._startNewGame}>
                New Game
            </button>
        );
    },

    _startNewGame: () => {
        clientActions.startGame();
    }
});

module.exports = GameButton;
