import { REQUEST_CUSTOMERS, REQUEST_CUSTOMER_BY_ID, RECEIVE_CUSTOMERS, RECEIVE_CUSTOMER_BY_ID, DB_ERROR } from '../actions';

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

