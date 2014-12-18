var React = window.React = require('react'),
    clientActions = require('../actions/clientActions');

var Letter = React.createClass({
    /**
     * Describe the properties that this component takes
     */
    propTypes: {
        letter: React.PropTypes.string,
        played: React.PropTypes.bool,
        isGameOver: React.PropTypes.bool
    },

    render: () => {
        var className = "Letters_letter";

        /**
         * If we have played this letter append the --played class extension
         */
        if (this.props.played) {
            className += "--played";
        }

        return (
            <li className={className} onClick={this._tryLetter}>
                {this.props.letter}
            </li>
        );
    },

    /**
     * Get the letter that was click and try that letter
     */
    _tryLetter: event => {
        var letter = event.target.innerText;

        /**
         * If we've already played this letter or the game is over return
         */
        if (this.props.played || this.props.isGameOver) {
            return;
        }

        clientActions.tryLetter(letter);
    }
});

module.exports = Letter;
