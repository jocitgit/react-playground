import React from 'react';

// prevent default behaviour
function ActionLink(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('ActionLink was clicked');
  }

  return (
    <div>
      <a href='#' onClick={handleClick}>Prevent default action link</a>
    </div>
  );
}

// binding this - options
class BindOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle1: false,
      toggle2: false,
      toggle3: false,
      button4: 0,
      button5: 0
    };
    this.click1 = this.click1.bind(this);
  }

  click1() { // best
    this.setState({ toggle1: !this.state.toggle1 });
  }

  click2 = () => { // experimental
    this.setState({ toggle2: !this.state.toggle2 });
  }

  click3() { // performance issues if passed to lower components
    this.setState({ toggle3: !this.state.toggle3 });
  }

  click4(increment, e) { // with additional argument
    const eventDate = new Date(e.timeStamp);
    console.log(e.type + ' ' + eventDate.toLocaleTimeString());
    this.setState({ button4: (this.state.button4 + increment) });
  }

  click5(increment, e) { // with additional argument - e passed automatically
    const eventDate = new Date(e.timeStamp);
    console.log(e.type + ' ' + eventDate.toLocaleTimeString());
    this.setState({ button5: (this.state.button5 + increment) });
  }

  render() {
    const increment = 3;
    return (
      <div>
        <button onClick={this.click1}>{this.state.toggle1 ? 'ON' : 'OFF'}</button>
        <button onClick={this.click2}>{this.state.toggle2 ? 'ON' : 'OFF'}</button>
        <button onClick={() => this.click3()}>{this.state.toggle3 ? 'ON' : 'OFF'}</button>
        <button onClick={(e) => this.click4(increment, e)}>{this.state.button4}</button>
        <button onClick={this.click5.bind(this, increment)}>{this.state.button5}</button>
      </div>
    );
  }
}

// only show if showNumber > 0
function Conditional(props) {
  return (
    <div>
      {
        props.showNumber > 0 &&
        <h3>Showing conditional text: {props.showNumber}</h3>
      }
    </div>
  );
}

// return null to hide component
function HideMe(props) {
  return (props.hide ? null :
    <div>
      <h3>Not hidden</h3>
    </div>
  );
}

// containment
function Container(props) {
  return (
    <div className={props.className}>
      {props.children}
      {props.extraChild}
    </div>
  );
}
function ShowContainer() {
  return (
    <Container className='container-class' extraChild={<p>extra child</p>}>
      <h1>Child Elements</h1>
      <p>child 1</p>
      <p>child 2</p>
    </Container>
  );
}

// specialisation
function Title(props) { // generic component
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
function WelcomeTitle() { // specialised component
  return (
    <Title title="Welcome" />
  );
}


export { ActionLink, BindOptions, Conditional, HideMe, ShowContainer, WelcomeTitle };
