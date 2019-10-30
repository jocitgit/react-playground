import { ADD_TODO, TOGGLE_TODO } from '../actions';

// Note - global state.todos is passed to this function as local state
export default function todos(state = [], action) { // initial todos state if undefined
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                    // or: return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        default:
            return state // return previous state for unknown actions
    }
}

