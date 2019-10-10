import React from 'react';
import {DataArray} from './DataArray';

function withData(WrappedComponent, selectDataFn) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {data: selectDataFn(DataArray)};
            this.reverseData = this.reverseData.bind(this);
        }

        reverseData() {
            const currentData = this.state.data.slice();
            this.setState({data: currentData.reverse()})
        }

        render() {
            return (
            <div>
                <button onClick={this.reverseData}>Reverse data</button>
                <WrappedComponent data={this.state.data} {...this.props} />
            </div>
            );
        }
    }
}

export default withData;