import { connect } from 'react-redux'
import Customer from '../components/Customer'

const mapStateToProps = state => {
    return {
        isFetching: state.customerById.isFetching,
        customerDetails: state.customerById.customer
    }
}

const CustomerDetail = connect(
    mapStateToProps
)(Customer)

export default CustomerDetail