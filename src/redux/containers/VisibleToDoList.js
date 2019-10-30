import { connect } from 'react-redux'
import { toggleToDo } from '../actions'
import ToDoList from '../components/ToDoList'

const getVisibleToDos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      case 'SHOW_ALL':
      default:
        return todos
    }
  }
  
  const mapStateToProps = state => {
    return {
      todos: getVisibleToDos(state.todos, state.visibilityFilter)
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onToDoClick: id => {
        dispatch(toggleToDo(id))
      }
    }
  }

const VisibleToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList)

export default VisibleToDoList