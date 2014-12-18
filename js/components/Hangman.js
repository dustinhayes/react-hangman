var React = require('react'),
    Secret = require('./Secret'),
    Gallows = require('./Gallows'),
    Letters = require('./Letters');

var Hangman = React.createClass({
    render: () => {
        return (
            <section className="Hangman">
                {/**
                 * Pull in the three sections of the hangman application
                 */}
                <Secret />
                <Gallows />
                <Letters />
            </section>
        );
    }
});

module.exports = Hangman;
