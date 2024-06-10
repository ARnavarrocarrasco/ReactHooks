import { fireEvent, render, renderHook, screen} from "@testing-library/react"
import { MultipleCustomHook } from "../../../src/03-examples/MultipleCustomHook"
import { useFetch } from "../../../src/hooks/useFetch"
import { useCounter } from "../../../src/hooks/useCounter"

jest.mock('../../../src/hooks/useFetch')
jest.mock('../../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks', () => {
    
    const increment = jest.fn()
    const decrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: increment,
        decrement: decrement,
    })

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {
        
        useFetch.mockReturnValue ({
            data: null,
            isLoading: true,
            hasError: null,
        })  
        
        render(<MultipleCustomHook/>);

        expect(screen.getByText('Cargando'))
        expect(screen.getByText('MultipleCustomHooks'))

        const nextButtom = screen.getByRole('button', {name: 'Siguiente'});
        
        expect(nextButtom.disabled).toBeFalsy();


        screen.debug();
    })

    test('debe de mostrar un Pokemon', () => {
        
        useFetch.mockReturnValue({
            data: {
                id: 1,
                name: 'bulbasaur',
                sprites: {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
                    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
                    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
                }
            },
            isLoading: false,
            hasError: null,
        });
        
        render(<MultipleCustomHook/>);
        expect(screen.getAllByRole("img")).toHaveLength(4);

        const nextButtom = screen.getByRole('button', {name: 'Anterior'});
        
        expect(nextButtom.disabled).toBeFalsy();

    })

    test('debe de llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: {
                id: 1,
                name: 'bulbasaur',
                sprites: {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
                    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
                    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
                }
            },
            isLoading: false,
            hasError: null,
        });

       

        render(<MultipleCustomHook/>)
        const nextButtom = screen.getByRole('button', {name: 'Siguiente'});
        fireEvent.click(nextButtom);

        expect(increment).toHaveBeenCalled();

    }) 
    
    
})
