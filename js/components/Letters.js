var React = require('react'),
    contains = require('../lib/contains'),
    Letter = require('./Letter'),
    GameStore = require('../stores/GameStore');

/**
 * A letter matrix constant which is supposed to emulate a keyboard.
 */
var LETTER_MATRIX = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']
];

/**
 * Get the current state properties needed to render the letters
 */
function getState() {
    return {
        isGameOver: GameStore.isGameOver,
        lettersPlayed: GameStore.state.lettersPlayed
    };
}

var Letters = React.createClass({
    getInitialState: function () {
        return getState();
    },

    componentDidMount: function () {
        GameStore.on('CHANGE', this._setState);
    },

    componentWillUnmount: function () {
        GameStore.removeListener('CHANGE', this._setState);
    },

    render: function () {
        /**
         * Map over each row of letters returning a <ul>
         */
        var letterBoard = LETTER_MATRIX.map(function (letterRow, index) {
            /**
             * For each letter in the row return a Letter component
             */
            var letter = letterRow.map(function (letter, index) {
                /**
                 * Pass down the the played state
                 */
                var played = contains(this.state.lettersPlayed, letter);

                return (
                    <Letter
                        letter={letter}
                        played={played}
                        isGameOver={this.state.isGameOver}

                        key={index}
                    />
                );
            }, this);

            return (
                <ul className="Letters_row" key={index}>
                    {letter}
                </ul>
            );
        }, this);

        return (
            <section className="Letters">
                {letterBoard}
            </section>
        );
    },

    _setState: function () {
        this.setState(getState());
    }
});

module.exports = Letters;
