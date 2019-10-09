import React from 'react';

class LoadingError extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // use to display alt UI
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // use to log error
    componentDidCatch(error, errorInfo) {
        console.log(error.toString());
        console.log(errorInfo.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>Loading error handled</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export { LoadingError };