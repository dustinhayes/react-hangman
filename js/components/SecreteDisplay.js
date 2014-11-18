var React = require('react'),
    contains = require('../lib/contains');

var SecreteDisplay = React.createClass({
    /**
     * Describe the properties that this component takes
     */
    propTypes: {
        secrete: React.PropTypes.string,
        lettersCorrect: React.PropTypes.array
    },

    render: function () {
        var lettersCorrect = this.props.lettersCorrect;
        /**
         * Split the secrete into words and map over them returning a <ul>
         */
        var words = this.props.secrete.split(' ').map(function (word, index) {
            {/**
             * Split each word into letters returning an <li>
             */}
            var letters = word.split('').map(function (letter, index) {
                return (
                    <li className="Secrete_display_letter" key={index}>
                        {/**
                         * If the letter was guessed correctly show it
                         */}
                        {contains(lettersCorrect, letter) && letter}
                    </li>
                );
            }, this);

            return (
                <ul className="Secrete_display_word" key={index}>
                    {letters}
                </ul>
            );
        }, this);

        return (
            <section className="Secrete_display">
                {words}
            </section>
        );
    }
});

module.exports = SecreteDisplay;
