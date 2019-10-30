import React from 'react'
import PropTypes from 'prop-types'

const ErrorDisplay = ({ err }) => (
      <div>
        {
          err !== undefined && err.hasError &&
          <h3>
            Error: {err.error.message} 
          </h3>
        }
      </div>
    )

ErrorDisplay.propTypes = {
  err: PropTypes.object
}

export default ErrorDisplay