import React from 'react'
import Footer from './Footer'
import AddToDo from '../containers/AddToDo'
import VisibleToDoList from '../containers/VisibleToDoList'
import GetCustomers from '../containers/GetCustomers'
import AllCustomers from '../containers/AllCustomers'
import CustomerDetail from '../containers/CustomerDetail'
import DBError from '../containers/DBError'
import AddCustomerForm from '../containers/AddCustomerForm'
// import UpdateCustomerForm from '../containers/UpdateCustomerForm'
// import UpdateCustomer from '../containers/UpdateCustomer'
import UpdateCustomerForm2 from '../containers/UpdateCustomerForm2'

const ReduxApp = () => (
  <div>
    <AddToDo />
    <VisibleToDoList />
    <Footer />
    <GetCustomers />
    <AllCustomers />
    <CustomerDetail />
    <UpdateCustomerForm2 />
    <DBError />
    <AddCustomerForm />
  </div>
)

export default ReduxApp