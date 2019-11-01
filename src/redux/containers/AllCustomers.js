import { connect } from 'react-redux'
import { fetchCustomerById, deleteCustomer } from '../actions'
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
        },
        onCustomerDelete: id => {
            dispatch(deleteCustomer(id))
        }
    }
}

const AllCustomers = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerList)

export default AllCustomers