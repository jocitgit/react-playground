import React from 'react';

class RefComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'done nothing'};
        this.doSomething = this.doSomething.bind(this);
    }

    doSomething() {
        this.setState({text: 'done something'})
    }

    render() {
        return (
            <p>{this.state.text}</p>
        );
    }
}

// using ref in a function - ref can be applied to element/class only
function RefFunction() {
    let elementRef = React.createRef();

    function handleRef() {
        elementRef.current.focus();
    }

    return (
        <div>
            <input type='text' ref={elementRef} />
            <button onClick={handleRef}>Focus this text box</button>
        </div>
    );
}

// ref forwarding
const RefParent = React.forwardRef((props, ref) => ( // note - can forward ref to dom element or class instance
    <div>
        <p>{props.title}</p>
        <input type='text' ref={ref} value={props.text} />
    </div>
));

class RefDemo extends React.Component {
    constructor(props) {
        super(props);
        this.domRef = React.createRef();
        this.classRef = React.createRef();
        this.childRef = React.createRef();
        this.changeFocus = this.changeFocus.bind(this);
        this.childFocus = this.childFocus.bind(this);
    }

    // using ref to access nested class instance
    componentDidMount() {
        this.classRef.current.doSomething();
    }

    // using ref to access nested dom element
    changeFocus() {
        this.domRef.current.focus(); 
    }

    // using ref to access child element through ref forwarding
    childFocus() {
        this.childRef.current.focus(); 
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.domRef} />
                <button onClick={this.changeFocus}>Focus this text box</button>
                <RefComponent />
                <RefComponent ref={this.classRef} />
                <RefFunction />
                <RefParent ref={this.childRef} title='Parent' text='some text' />
                <button onClick={this.childFocus}>Focus this text box</button>
            </div>
        );
    }
}

export default RefDemo;