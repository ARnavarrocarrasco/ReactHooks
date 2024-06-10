import PropTypes from 'prop-types';

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <div>
        <li className="list-group-item d-flex justify-content-between">
            <span 
              className={`align-self-center pointer-cursor ${todo.done ? 'text-decoration-line-through': ''}`}
              onClick={() => onToggleTodo(todo.id)}
              aria-label='span'
            >
                {todo.description}
            </span>
            <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
        </li> 
    </div>
  )
}

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired
}

