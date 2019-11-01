import React from 'react'
import { Control, Form, actions } from 'react-redux-form'
import { connect } from 'react-redux'
import { addCustomer } from '../actions'

let AddCustomerForm = ({ dispatch }) => {
    return (
        <div>
            <Form model="addCustomer" 
                onSubmit={values => {
                    dispatch(addCustomer(values))
                }}
            >
                <label htmlFor="addCustomer.firstName">First Name: </label>
                <Control.text model="addCustomer.firstName" id="addCustomer.firstName"/>
                <label htmlFor="addCustomer.lastName">Last Name: </label>
                <Control.text model="addCustomer.lastName" id="addCustomer.lastName"/>
                <button type="submit">Add Customer</button>
            </Form>
        </div>
    )
}
AddCustomerForm = connect()(AddCustomerForm)

export default AddCustomerForm