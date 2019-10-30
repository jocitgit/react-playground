import React from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = ({ todos, onToDoClick }) => (
  <ul>
    {todos.map(todo => (
      <ToDo key={todo.id} {...todo} onClick={() => onToDoClick(todo.id)} />
    ))}
  </ul>
)

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onToDoClick: PropTypes.func.isRequired
}

export default ToDoList
