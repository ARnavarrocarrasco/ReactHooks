import { render, screen } from "@testing-library/react"
import {MainApp} from '../../../src/09-useContext/MainApp'
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en el <MainApp/>', () => {
    test('debe de mostrar el homepage', () => {
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )

        expect(screen.getByText('HomePage')).toBeTruthy();

    })

    test('debe de mostrar el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )

        expect(screen.getByText('LoginPage')).toBeTruthy();
        const aLink = screen.getByLabelText('login')
        expect(aLink.className).toBe("nav-link + active")
        screen.debug()
    })
    
})
