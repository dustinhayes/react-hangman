var React = require('react'),
    SecreteDisplay = require('./SecreteDisplay'),
    GameStore = require('../stores/GameStore'),
    SecreteStore = require('../stores/SecreteStore');

/**
 * Get the current state properties needed to render the secrete
 */
function getState() {
    return {
        secrete: SecreteStore.state.secrete,
        category: SecreteStore.state.category,
        lettersCorrect: GameStore.lettersCorrect
    };
}

var Secrete = React.createClass({
    getInitialState: function () {
        return getState();
    },

    componentDidMount: function () {
        GameStore.on('CHANGE', this._setState);
        SecreteStore.on('CHANGE', this._setState);
    },

    componentWillUnmount: function () {
        GameStore.removeListener('CHANGE', this._setState);
        SecreteStore.removeListener('CHANGE', this._setState);
    },

    render: function () {
        return (
            <section className="Secrete">
                <h1 className="Secrete_category">{this.state.category}</h1>
                {/**
                 * Pass the secrete and the letters correct down to the
                 * secrete display
                 */}
                <SecreteDisplay
                    secrete={this.state.secrete}
                    lettersCorrect={this.state.lettersCorrect}
                />
            </section>
        );
    },

    _setState: function () {
        this.setState(getState());
    }
});

module.exports = Secrete;
