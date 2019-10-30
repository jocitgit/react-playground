// import fetch from 'cross-fetch'

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
    let err = false;
    dispatch(requestCustomerById(id))
    return fetch('http://localhost:3000/customers/' + id)
      // .then((response) => response.json())
      // .then(responseJson => dispatch(receiveCustomerById(id, responseJson.data)))
      // .catch(err => dispatch(dbError(err)))
      .then((response) => {
        err = !response.ok;
        return response.json();
      })
      .then((responseJson) => 
        err ? dispatch(dbError(responseJson)) : dispatch(receiveCustomerById(id, responseJson.data))
      )
      .catch(err => dispatch(dbError(err)))
  }
}

