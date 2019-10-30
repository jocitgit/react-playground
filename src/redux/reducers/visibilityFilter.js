import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions';

const { SHOW_ALL } = VisibilityFilters; // VisibilityFilters.SHOW_ALL

export default function visibilityFilter(state = SHOW_ALL, action) { // initial visibility state if undefined
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            // Copy state to a new object i.e. state not mutated - 
            // Object.assign(target, source1, source2....) source2 will overwrite properties in source1
            // Alternatively use spread: return { ...state, ...newState }
            return action.filter
        default:
            return state // return previous state for unknown actions
    }
}