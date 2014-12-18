var React = require('react'),
    GameButton = require('./GameButton'),
    GallowsMan = require('./GallowsMan'),
    GameStore = require('../stores/GameStore');

/**
 * Get the current state properties needed to render the secret
 */
var getState = () => {
    return {
        isGameOver: GameStore.isGameOver,
        currentLevel: GameStore.currentLevel
    };
};

var Gallows = React.createClass({
    getInitialState: () => {
        return getState();
    },

    componentDidMount: () => {
        GameStore.on('CHANGE', this._setState);
    },

    componentWillUnmount: () => {
        GameStore.removeListener('CHANGE', this._setState);
    },

    render: () => {
        return (
            <section className="Gallows">
                {/**
                  * If the game is over show the GameButton
                  */}
                {this.state.isGameOver && <GameButton />}
                <GallowsMan currentLevel={this.state.currentLevel} />
            </section>
        );
    },

    _setState: () => {
        this.setState(getState());
    }
});

module.exports = Gallows;
