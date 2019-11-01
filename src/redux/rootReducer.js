import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import visibilityFilter from './reducers/visibilityFilter';
import todos from './reducers/todos';
import { customers, customerById, dbError } from './reducers/customerReducer'

// Root reducer - calls other reducers visibilityFilter and todos
// Each reducer manages its own part of the global state
// export default function todoApp(state = {}, action) { // initial state if undefined
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }

// Equivalent to above function
// key name and state 'slice' provided to each reducer correspond to its name 
// e.g. { visibilityFilter: visibilityFilter(state.visibilityFilter...

const initialAddCustomerState = { firstName: '', lastName: '' };
const initialUpdateCustomerState = { _id: '', firstName: '', lastName: '' };

const rootReducer = combineReducers({ 
    visibilityFilter,
    todos, 
    customers, 
    customerById, 
    dbError,
    ...createForms({addCustomer: initialAddCustomerState, updateCustomer: initialUpdateCustomerState})
  });
  
export default rootReducer;



 