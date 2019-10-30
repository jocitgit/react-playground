import React from 'react'
import PropTypes from 'prop-types'
import CustomerElement from './CustomerElement'

// const CustomerList = ({ isFetching, customers }) => {
const CustomerList = ({ isFetching, customers, onCustomerClick }) => {
  if (isFetching) {
    return (<p>Fetching Data...</p>)
  } else {
    return (
      <ul>
        {customers.map(customer => (
          <CustomerElement key={customer._id} customerDetails={customer} onClick={() => onCustomerClick(customer._id)}/>
        ))}
      </ul>
    )

  }

}

CustomerList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired
    })
  ),
  onCustomerClick: PropTypes.func.isRequired
}

export default CustomerList
