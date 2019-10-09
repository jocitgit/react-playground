import React from 'react';
import { MyContext, MyContextObject, ContextColor, ContextUsername } from './constants';

// Providing and consuming single context value
class ContextUser extends React.Component {
    static contextType = MyContext; // Either set contextType here...
    render() {
        return (
            <div> MyContext is {this.context}</div>
        );
    }
}
// ContextUser.contextType = MyContext; // ...or set contextType for the above class here

function ContextConsumer() { // enables context use in a function instead of class
    return (
        <MyContext.Consumer>
            {value => <div>MyContext is {value}</div>}
        </MyContext.Consumer>
    );
}

function ContextProvider() {
    return (
        <MyContext.Provider value='true'>
            <ContextUser />
            <ContextConsumer />
        </MyContext.Provider>
    );
}

// Providing and consuming a context with multiple values
function ContextObjectProvider(props) {
    const newValues = { str: props.str, handler: props.handler };
    return (
        <MyContextObject.Provider value={newValues}>
            <ContextObjectConsumer />
        </MyContextObject.Provider>
    );
}

function ContextObjectConsumer() {
    return (
        <MyContextObject.Consumer>
            {
                ({ str, handler }) => (
                    <button onClick={handler}>{str}</button>
                )
            }
        </MyContextObject.Consumer>
    );
}

// Providing and consuming multiple contexts
function MultiContextProvider() {
    return (
        <ContextColor.Provider value='green'>
            <ContextUsername.Provider value='username'>
                <MultiContextConsumer />
            </ContextUsername.Provider>
        </ContextColor.Provider>
    );
}

function MultiContextConsumer() {
    return (
        <ContextColor.Consumer>
            {
                color => (
                    <ContextUsername.Consumer>
                        {
                            username => (
                                <p style={{backgroundColor: color}}>{username}</p>
                            )
                        }
                    </ContextUsername.Consumer>
                )
            }
        </ContextColor.Consumer>
    );
}


class ShowContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            str: 'hello'
        };
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.state.str === 'hello' ? this.setState({str: 'goodbye'}) : this.setState({str: 'hello'});
    }

    render() {
        return (
            <div>
                <ContextProvider />
                <ContextUser />
                <ContextObjectProvider str={this.state.str} handler={this.handler}/>
                <MultiContextProvider />
            </div>
        );
    }
}

export default ShowContext;