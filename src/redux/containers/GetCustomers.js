import React from 'react'
import { connect } from 'react-redux'
import { fetchCustomers } from '../actions'

let GetCustomers = ({ dispatch }) => (
  <div>
    <button onClick={() => dispatch(fetchCustomers())}>Get Customers</button>
  </div>
)

GetCustomers = connect()(GetCustomers)

export default GetCustomers