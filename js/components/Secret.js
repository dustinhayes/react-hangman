var React = require('react'),
    SecretDisplay = require('./SecretDisplay'),
    GameStore = require('../stores/GameStore'),
    SecretStore = require('../stores/SecretStore');

/**
 * Get the current state properties needed to render the secret
 */
var getState = () => {
    return {
        secret: SecretStore.state.secret,
        category: SecretStore.state.category,
        lettersCorrect: GameStore.lettersCorrect
    };
}

var Secret = React.createClass({
    getInitialState: () => {
        return getState();
    },

    componentDidMount: function () {
        GameStore.on('CHANGE', this._setState);
        SecretStore.on('CHANGE', this._setState);
    },

    componentWillUnmount: function () {
        GameStore.removeListener('CHANGE', this._setState);
        SecretStore.removeListener('CHANGE', this._setState);
    },

    render: function () {
        return (
            <section className="secret">
                <h1 className="secret_category">{this.state.category}</h1>
                {/**
                 * Pass the secret and the letters correct down to the
                 * secret display
                 */}
                <SecretDisplay
                    secret={this.state.secret}
                    lettersCorrect={this.state.lettersCorrect}
                />
            </section>
        );
    },

    _setState: function () {
        this.setState(getState());
    }
});

module.exports = Secret;
