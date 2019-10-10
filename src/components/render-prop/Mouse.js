import React from 'react';
import docbrown from '../../assets/images/docbrown.jpg';

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(e) {
        this.setState({ x: e.clientX, y: e.clientY });
    }

    render() {
        return (
            <div style={{ width: '100%', height: '500px' }} onMouseMove={this.handleMouseMove} >
                {
                    this.props.render(this.state)
                }
            </div>
        );
    }
}

function Doc(props) {
    return (
        <img src={docbrown} style={{ position: 'sticky', left: props.position.x, top: props.position.y }} />
    );
}

function MouseDemo(props) {
    return (
            <Mouse render={mousePosition => (
                <Doc position={mousePosition} />)}
            />
    );
}

export default MouseDemo;