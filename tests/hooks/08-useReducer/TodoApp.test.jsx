import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../../src/08-useReducer/TodoApp";
import {useReducerCustom} from '../../../src/hooks/useReducerCustom'

jest.mock('../../../src/hooks/useReducerCustom');


describe('Probamos el <TodoApp/>', () => {
    
    useReducerCustom.mockReturnValue({
        todos:[
            {id: 1,description: 'Obtener gema del alma',done: false,},
            {id: 2, description: 'Obtener la gema del poder', done: true}
        ] ,
        todoCount: 2,
        pendingTodoCount: 1, 
        onNewTodo: jest.fn(), 
        handleRemove: jest.fn(), 
        toggleTodo: jest.fn(),
    })


    test('debe de mostrar el componente correctamente', () => {
        render(<TodoApp/>)
        
        expect(screen.getByText("Obtener gema del alma")).toBeTruthy();
        expect(screen.getByText('Obtener la gema del poder')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        
    })
    
})
