import { TodoList } from "./components/TodoList"
import {AddTodo} from "./components/AddTodo"
import { useReducerCustom } from "../hooks/useReducerCustom"
//En donde puedo guardar la información que agrego a la lista? 
//  -> Cookies: Graban menor información, viajan usualmente cuando se hace un request https, cuando se procesa la información petición 


export const TodoApp = () => {

    const {todos, todoCount, pendingTodoCount, onNewTodo, handleRemove, toggleTodo } = useReducerCustom()

    return (
        <>
            <h1>Todo App: {todoCount}, <small>pendientes: {pendingTodoCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleRemove={handleRemove} onToggleTodo={toggleTodo}/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <AddTodo onAdd={onNewTodo}/>
                </div>
            </div>

            
        </>
    )
}


