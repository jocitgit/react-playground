import { connect } from 'react-redux'
import { fetchCustomerById } from '../actions'
import CustomerList from '../components/CustomerList'

const mapStateToProps = state => {
    return {
        isFetching: state.customers.isFetching,
        customers: state.customers.customers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCustomerClick: id => {
            dispatch(fetchCustomerById(id))
        }
    }
}

const AllCustomers = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerList)

export default AllCustomers