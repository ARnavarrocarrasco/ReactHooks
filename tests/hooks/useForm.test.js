import { fireEvent, renderHook } from "@testing-library/react"
import {useForm} from '../../src/hooks/useForm';
import { act } from "react";
describe('Probando el useForm Hook', () => {
    
    const initialForm = {
        name: 'Anthony',
        email: 'thony@google.com'
    }

    test('debe de regresar los valores por defecto ', () => {
        
        const {result} = renderHook(() => useForm(initialForm))

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            handleInputChange: expect.any(Function),      
            onResetForm: expect.any(Function),
          })
    })
    
    test('debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan';
        const {result} = renderHook(() => useForm(initialForm));
        const {handleInputChange} = result.current;
        
        act(() => {
            handleInputChange({target: {name: 'name', value: newValue}})
        })

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue)

    })

    test('debe de realizar el reset del formulario', () => {
        const newValue = 'Juan';
        const {result} = renderHook(() => useForm(initialForm));
        const {handleInputChange, onResetForm} = result.current;
        
        act(() => {
            handleInputChange({target: {name: 'name', value: newValue}})
            onResetForm()
        })

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name)

    })
    
})
