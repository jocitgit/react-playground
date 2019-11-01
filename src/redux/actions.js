// import fetch from 'cross-fetch'
import { actions } from 'react-redux-form'

let nextToDoId = 0;

/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const REQUEST_CUSTOMERS = 'REQUEST_CUSTOMERS'
export const REQUEST_CUSTOMER_BY_ID = 'REQUEST_CUSTOMER_BY_ID'
export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS'
export const RECEIVE_CUSTOMER_BY_ID = 'RECEIVE_CUSTOMER_BY_ID'
export const DB_ERROR = 'DB_ERROR'

export const REQUEST_ADD_CUSTOMER = 'REQUEST_ADD_CUSTOMER'
export const RECEIVE_ADD_CUSTOMER = 'RECEIVE_ADD_CUSTOMER'
export const REQUEST_DELETE_CUSTOMER = 'REQUEST_DELETE_CUSTOMER'
export const RECEIVE_DELETE_CUSTOMER = 'RECEIVE_DELETE_CUSTOMER'
export const REQUEST_UPDATE_CUSTOMER = 'REQUEST_UPDATE_CUSTOMER'
export const RECEIVE_UPDATE_CUSTOMER = 'RECEIVE_UPDATE_CUSTOMER'


/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addToDo(text) {
  return {
    type: ADD_TODO,
    id: nextToDoId++,
    text
  }
}

export function toggleToDo(id) {
  return { type: TOGGLE_TODO, id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function requestCustomers() {
  return {
    type: REQUEST_CUSTOMERS
  }
}

export function requestCustomerById(id) {
  return { type: REQUEST_CUSTOMER_BY_ID, id }
}

export function receiveCustomers(data) {
  // console.log(data);
  return {
    type: RECEIVE_CUSTOMERS,
    customers: data
  }
}

export function receiveCustomerById(id, data) {
  // console.log(data);
  return {
    type: RECEIVE_CUSTOMER_BY_ID,
    id,
    customer: data
  }
}

export function dbError(err) {
  // console.log(err);
  return {
    type: DB_ERROR,
    error: err
  }
}

export function requestAddCustomer(customer) {
  return { type: REQUEST_ADD_CUSTOMER, customer }
}

export function receiveAddCustomer(customer) {
  return {
    type: RECEIVE_ADD_CUSTOMER,
    customer
  }
}

export function requestDeleteCustomer(id) {
  return { 
    type: REQUEST_DELETE_CUSTOMER, 
    id 
  }
}

export function receiveDeleteCustomer(customer) {
  return {
    type: RECEIVE_DELETE_CUSTOMER, 
    customer
  }
}

export function requestUpdateCustomer(customer) {
  return { 
    type: REQUEST_UPDATE_CUSTOMER, 
    customer 
  }
}

export function receiveUpdateCustomer(customer) {
  return {
    type: RECEIVE_UPDATE_CUSTOMER,
    customer
  }
}

export function fetchCustomers() {
  return function (dispatch) {
    dispatch(requestCustomers())
    return fetch('http://localhost:3000/customers')
      .then((response) => response.json())
      .then((responseJson) => dispatch(receiveCustomers(responseJson.data)))
      .catch(err => dispatch(dbError(err))) // note -  only catches network errors - see below for other response errors
  }
}

export function fetchCustomerById(id) {
  return function (dispatch) {
    let hasErr = false;
    dispatch(requestCustomerById(id))
    return fetch('http://localhost:3000/customers/' + id)
      // .then((response) => response.json())
      // .then(responseJson => dispatch(receiveCustomerById(id, responseJson.data)))
      // .catch(err => dispatch(dbError(err)))
      .then((response) => {
        hasErr = !response.ok;
        return response.json();
      })
      .then((responseJson) => {
        if (hasErr) {
          dispatch(dbError(responseJson))
         } else { 
           dispatch(receiveCustomerById(id, responseJson.data))
           //dispatch(actions.merge('updateCustomer', responseJson.data)) // requires separate reset function
           dispatch(actions.load('updateCustomer', responseJson.data)) // allows standard reset button to work
         }        
      })
      .catch(err => dispatch(dbError(err)))
  }
}

export function addCustomer(customer) {
  return function(dispatch) {
    let hasErr = false;
    dispatch(requestAddCustomer(customer))
    return fetch('http://localhost:3000/customers', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(customer)
              })
              .then((response) => {
                hasErr = !response.ok;
                return response.json();
              })
              .then((responseJson) => {
                if (hasErr) {
                  dispatch(dbError(responseJson))
                 } else {
                  dispatch(receiveAddCustomer(responseJson.data))
                  dispatch(fetchCustomers())
                 }
              })
              .catch(err => dispatch(dbError(err)))
  }
}

export function deleteCustomer(id) {
  return function(dispatch) {
    let hasErr = false;
    dispatch(requestDeleteCustomer(id))
    return fetch('http://localhost:3000/customers/' + id, {
                  method: 'DELETE',
                  headers: { 'Content-Type': 'application/json' },
                  body: ''
              })
              .then((response) => {
                hasErr = !response.ok;
                return response.json();
              })
              .then((responseJson) => {
                if (hasErr) {
                  dispatch(dbError(responseJson))
                 } else {
                  dispatch(receiveDeleteCustomer(responseJson.data))
                  dispatch(fetchCustomers())
                 }
              })
              .catch(err => dispatch(dbError(err)))
  }
}

export function updateCustomer(customer) {
  return function(dispatch) {
    let hasErr = false;
    dispatch(requestUpdateCustomer(customer))
    return fetch('http://localhost:3000/customers', {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(customer)
              })
              .then((response) => {
                hasErr = !response.ok;
                return response.json();
              })
              .then((responseJson) => {
                if (hasErr) {
                  dispatch(dbError(responseJson))
                 } else {
                  dispatch(receiveUpdateCustomer(responseJson.data))
                  dispatch(fetchCustomers())
                 }
              })
              .catch(err => dispatch(dbError(err)))
  }
}

