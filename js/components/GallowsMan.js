var React = require('react'),
    clientActions = require('../actions/clientActions');

var GameButton = React.createClass({
    /**
     * Describe the properties that this component takes
     */
    propTypes: {
        currentLevel: React.PropTypes.number
    },

    render: () => {
        return (
            <section className="Gallows_man">
                <h1>{this.props.currentLevel}</h1>
            </section>
        );
    }
});

module.exports = GameButton;
