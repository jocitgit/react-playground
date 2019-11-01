import React from 'react'
import PropTypes from 'prop-types'

// const CustomerElement = ({ customerDetails }) => (
const CustomerElement = ({ onClick, customerDetails, onDeleteClick }) => (
  <li>
    <a href="" onClick={e => {
              e.preventDefault()
              onClick()
            }}
          >
           {customerDetails.fullName}
          </a> 
    <button onClick={onDeleteClick}
          >
            delete
          </button> 
  </li>
)

CustomerElement.propTypes = {
  onClick: PropTypes.func.isRequired,
  customerDetails: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default CustomerElement