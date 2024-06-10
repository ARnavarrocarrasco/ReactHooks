import { fireEvent, render, screen} from "@testing-library/react"
import { TodoItem } from "../../../../src/08-useReducer/components/TodoItem"


describe('Probando el componente <TodoItem/>', () => {
    
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false,
    }
    
    
    const onToggleTodoMock = jest.fn(); 
    const onDeleteTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks());

    test('debe de mostrar el Todo pendiente de completar', () => {
        
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)
        
        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');
       
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
        expect(spanElement.className).toContain('align-self-center pointer-cursor')

    })

    test('debe de mostrar el Todo completado', () => {
        
        todo.done = true;

        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)
        
        const spanElement = screen.getByLabelText('span');
        screen.debug(); 
        
        expect(spanElement.className).toContain('text-decoration-line-through')

    })


    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        render(<TodoItem 
                    todo={todo} 
                    onDeleteTodo={onDeleteTodoMock} 
                    onToggleTodo={onToggleTodoMock}
                />)
        
        
                const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    })

    test('el boton debe de llamar el deleteTodo', () => {
        render(<TodoItem 
                    todo={todo} 
                    onDeleteTodo={onDeleteTodoMock} 
                    onToggleTodo={onToggleTodoMock}
                />)
        
        
        const buttonDelete = screen.getByRole('button');
        fireEvent.click(buttonDelete);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
        expect(onDeleteTodoMock).toHaveBeenCalledTimes(1);
    })
    
    
    
})
