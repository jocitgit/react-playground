import React from 'react';

class BadComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ counter: 1 });
    }

    render() {
        if (this.state.counter === 1) {
            throw new Error('Bad Component Error'); // force error during render
        }

        return (
            <button onClick={this.handleClick}>Click to throw error</button>
        );
    }

}

export default BadComponent;