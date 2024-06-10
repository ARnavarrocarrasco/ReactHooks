import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({todos = [], handleRemove, onToggleTodo}) => {
  return (
    <>
        <ul className="list-group">
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={handleRemove}
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }
            
        </ul>
    </>
  )
}


TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
}
    


