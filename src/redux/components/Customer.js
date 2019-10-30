import React from 'react'
import PropTypes from 'prop-types'

const Customer = ({ isFetching, customerDetails }) => {
  if (isFetching) {
    return (<p>Fetching customer details...</p>)
  } else {
    return (
      <div>
        {
          customerDetails !== undefined && customerDetails._id !== undefined &&
          <h3>
            Id: {customerDetails._id} <br />
            First Name: {customerDetails.firstName} <br />
            Last Name: {customerDetails.lastName}<br />
          </h3>
        }
      </div>

    )
  }
}

Customer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  customerDetails: PropTypes.shape({
    _id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    fullName: PropTypes.string
  })
}

export default Customer