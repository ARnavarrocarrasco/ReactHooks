import { fireEvent, render, screen} from "@testing-library/react"
import {LoginPage} from '../../../src/09-useContext/LoginPage'
import { UserContext } from "../../../src/09-useContext/context/UserContext"

describe('Probando LoginPage', () => {

    const user = {
        id: 123, name: "juan", email: "juan@gmail.com"
    }

    const setUserMock = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('debe mostrar el usuario', () => {
        render(
           <UserContext.Provider value={{user: user, setUser: setUser}}>
                <LoginPage/>
           </UserContext.Provider> 
        )

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toContain(user.name);
    })

    test('debe llamar al setUser cuando se hace clic en el boton', () => {
        render(
            <UserContext.Provider value={{user: user, setUser: setUserMock}}>
                 <LoginPage/>
            </UserContext.Provider> 
        )

        const boton = screen.getByRole('button');
        fireEvent.click(boton)
        expect(setUserMock).toHaveBeenCalledWith(user);

    })

    
})
