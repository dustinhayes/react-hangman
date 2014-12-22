var React = require('react'),
    contains = require('../lib/contains'),
    Letter = require('./Letter'),
    GameStore = require('../stores/GameStore'),
    clientActions = require('../actions/clientActions');

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
var getState = () => {
    return {
        isFocused: true,
        isGameOver: GameStore.isGameOver,
        lettersPlayed: GameStore.state.lettersPlayed
    };
}

var Letters = React.createClass({
    getInitialState: () => {
        return getState();
    },

    componentDidMount: () => {
        /**
         * When this component mounts, we want to listen for keyups as an
         * alternative way to try letters
         */
        window.addEventListener('keyup', this._tryLetter);
        GameStore.on('CHANGE', this._setState);
    },

    componentWillUnmount: () => {
        GameStore.removeListener('CHANGE', this._setState);
    },

    render: () => {
        /**
         * Map over each row of letters returning a <ul>
         */
        var letterBoard = LETTER_MATRIX.map((letterRow, index) => {
            /**
             * For each letter in the row return a Letter component
             */
            var letter = letterRow.map((letter, index) => {
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

    _tryLetter: event => {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();

        /**
         * If the letter is not valid, the game is over, or we've played this
         * letter, return.
         */
        if (!(/^[a-zA-Z]+$/).test(letter) || this.state.isGameOver ||
            contains(this.state.lettersPlayed, letter)) {
            return;
        }

        clientActions.tryLetter(letter);
    },

    _setState: () => {
        this.setState(getState());
    }
});

module.exports = Letters;
