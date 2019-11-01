import { REQUEST_CUSTOMERS, REQUEST_CUSTOMER_BY_ID, RECEIVE_CUSTOMERS, RECEIVE_CUSTOMER_BY_ID, DB_ERROR,
REQUEST_ADD_CUSTOMER, RECEIVE_ADD_CUSTOMER, REQUEST_DELETE_CUSTOMER, RECEIVE_DELETE_CUSTOMER,
REQUEST_UPDATE_CUSTOMER, RECEIVE_UPDATE_CUSTOMER } from '../actions';

export function customers(
    state = {
        isFetching: false,
        customers: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_CUSTOMERS:
            return Object.assign({}, state, { isFetching: true })
        case RECEIVE_CUSTOMERS:
            return Object.assign({}, state, { isFetching: false, customers: action.customers })
        default:
            return state
    }
}

export function customerById(
    state = {
        isFetching: false,
        customer: {}
    },
    action
) {
    switch (action.type) {
        case REQUEST_CUSTOMER_BY_ID:
            return Object.assign({}, state, { isFetching: true, id: action.id })
        case RECEIVE_CUSTOMER_BY_ID:
            return Object.assign({}, state, { isFetching: false, id: action.id, customer: action.customer })
        default:
            return state
    }
}

export function dbError(
    state = {
        hasError: false,
        error: {}
    },
    action
) {
    switch (action.type) {
        case DB_ERROR:
            return Object.assign({}, state, { hasError: true, error: action.error })
        default:
            return state
    }
}

export function addCustomer(
    state = {
        isFetching: false,
        customer: {}
    },
    action
) {
    switch (action.type) {
        case REQUEST_ADD_CUSTOMER:
            return Object.assign({}, state, { isFetching: true })
        case RECEIVE_ADD_CUSTOMER:
            return Object.assign({}, state, { isFetching: false, customer: action.customer })
        default:
            return state
    }
}

export function deleteCustomer(
    state = {
        isFetching: false,
        customer: {}
    },
    action
) {
    switch (action.type) {
        case REQUEST_DELETE_CUSTOMER:
            return Object.assign({}, state, { isFetching: true })
        case RECEIVE_DELETE_CUSTOMER:
            return Object.assign({}, state, { isFetching: false, customer: action.customer })
        default:
            return state
    }
}

export function updateCustomer(
    state = {
        isFetching: false,
        customer: {}
    },
    action
) {
    switch (action.type) {
        case REQUEST_UPDATE_CUSTOMER:
            return Object.assign({}, state, { isFetching: true })
        case RECEIVE_UPDATE_CUSTOMER:
            return Object.assign({}, state, { isFetching: false, customer: action.customer })
        default:
            return state
    }
}

