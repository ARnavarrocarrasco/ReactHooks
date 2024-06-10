import { useReducer, useEffect} from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []  
}

export const useReducerCustom = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)  

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) );
    }, [todos]);

    const onNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo,
        }

        dispatch(action);
    }

    const handleRemove = (id) => {
        const remove = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch(remove);
    }

    const toggleTodo = (id) => {
        const toggle = {
            type: '[TODO] Check',
            payload: id
        }

        dispatch(toggle)
    }


    return {
        todos,
        todoCount: todos.length,
        pendingTodoCount: todos.filter(todo => !todo.done).length,
        onNewTodo,
        handleRemove,
        toggleTodo,
    }
}


