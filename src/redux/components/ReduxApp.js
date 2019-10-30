import React from 'react'
import Footer from './Footer'
import AddToDo from '../containers/AddToDo'
import VisibleToDoList from '../containers/VisibleToDoList'
import GetCustomers from '../containers/GetCustomers'
import AllCustomers from '../containers/AllCustomers'
import CustomerDetail from '../containers/CustomerDetail'
import DBError from '../containers/DBError'

const ReduxApp = () => (
  <div>
    <AddToDo />
    <VisibleToDoList />
    <Footer />
    <GetCustomers />
    <AllCustomers />
    <CustomerDetail />
    <DBError />
  </div>
)

export default ReduxApp