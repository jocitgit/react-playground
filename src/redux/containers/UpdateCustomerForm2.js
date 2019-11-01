import React from 'react'
import { Control, Form, actions, track } from 'react-redux-form'
import { connect } from 'react-redux'
import { updateCustomer } from '../actions'

// let UpdateCustomerForm2 = ({ isFetching, selectedCustomer, onUpdateClick, onDefaultClick}) => {
class UpdateCustomerForm2 extends React.Component {

    // componentDidMount() {
    //     this.props.onDefaultClick(this.props.selectedCustomer);
    // }
    render() {
        const { isFetching, selectedCustomer, onUpdateClick, onDefaultClick, pristine } = this.props;
        if (isFetching) {
            return (<p>Fetching customer details...</p>)
        } else {
            return (
                <div>
                    <Form model="updateCustomer"
                        onSubmit={(customer) => onUpdateClick(customer)}
                    >
                        <label htmlFor="._id">Id: </label>
                        <Control.text model="._id" id="._id" />
                        <label htmlFor=".firstName">First Name: </label>
                        <Control.text model=".firstName" id=".firstName" />
                        <label htmlFor=".lastName">Last Name: </label>
                        <Control.text model=".lastName" id=".lastName" />
                        <button type='button' onClick={() => onDefaultClick(selectedCustomer)}>Reset to Default</button>
                        <button type="submit" disabled={pristine}>Update Customer</button>
                        <button type="reset">Reset</button>
                    </Form>
                </div>
            )
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateClick: customer => {
            dispatch(updateCustomer(customer))
        },
        onDefaultClick: selectedCustomer => {
            dispatch(actions.merge('updateCustomer', selectedCustomer))
        }
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.customerById.isFetching, // || state.customers.isFetching,
        selectedCustomer: state.customerById.customer, 
        pristine: state.forms.updateCustomer.$form.pristine
    }
}

UpdateCustomerForm2 = connect(mapStateToProps, mapDispatchToProps)(UpdateCustomerForm2)

export default UpdateCustomerForm2