import { todoReducer } from "../../../src/08-useReducer/todoReducer"


describe('Probando en el todoReducer', () => {
    
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]
    
    test('debe regresar el estado inicial ', () => {
        
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
    })

    test('debe de agregar un TODO ', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {id: 2, description: 'Todo 2', done: false}
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
        
    })

    test('debe de eliminar un TODO', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {id: 2, description: 'Todo 2', done: false}
        }

        const remove = {
            type: '[TODO] Remove Todo',
            payload: {id: 1}
        }

        const newState = todoReducer(initialState, action);

        const newState2 = todoReducer(newState, remove);

        expect(newState2.length).toBe(1)
        expect(newState2).toContain(action.payload)

    })

    test('debe de realizar el toggle del todo', () => {
        const action = {
            type: '[TODO] Check',
            payload: {id: 1}
        }
        const newState = todoReducer(initialState, action)
        
        const toggleTodo = newState.find(todo => todo.id === action.payload.id);

        expect(toggleTodo.done).toBeTruthy();
    })
    

    
    
    
})
