var React = require('react'),
    Secrete = require('./Secrete'),
    Gallows = require('./Gallows'),
    Letters = require('./Letters');

var Hangman = React.createClass({
    render: function () {
        return (
            <section className="Hangman">
                {/**
                 * Pull in the three sections of the hangman application
                 */}
                <Secrete />
                <Gallows />
                <Letters />
            </section>
        );
    }
});

module.exports = Hangman;
