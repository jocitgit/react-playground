import React from 'react'
import PropTypes from 'prop-types'

// const CustomerElement = ({ customerDetails }) => (
const CustomerElement = ({ onClick, customerDetails }) => (
  <li onClick={onClick}>
    {customerDetails.fullName}
  </li>
)

CustomerElement.propTypes = {
  onClick: PropTypes.func.isRequired,
  customerDetails: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired
  }).isRequired
}

export default CustomerElement