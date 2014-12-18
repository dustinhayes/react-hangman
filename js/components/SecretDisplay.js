var React = require('react'),
    contains = require('../lib/contains');

var SecretDisplay = React.createClass({
    /**
     * Describe the properties that this component takes
     */
    propTypes: {
        secret: React.PropTypes.string,
        lettersCorrect: React.PropTypes.array
    },

    render: () => {
        var lettersCorrect = this.props.lettersCorrect;
        /**
         * Split the secret into words and map over them returning a <ul>
         */
        var words = this.props.secret.split(' ').map((word, index) => {
            {/**
             * Split each word into letters returning an <li>
             */}
            var letters = word.split('').map((letter, index) => {
                return (
                    <li className="secret_display_letter" key={index}>
                        {/**
                         * If the letter was guessed correctly show it
                         */}
                        {contains(lettersCorrect, letter) && letter}
                    </li>
                );
            }, this);

            return (
                <ul className="secret_display_word" key={index}>
                    {letters}
                </ul>
            );
        }, this);

        return (
            <section className="secret_display">
                {words}
            </section>
        );
    }
});

module.exports = SecretDisplay;
