import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react";


describe('Pruebas en el useCounter hook', () => {
    
    const value = 100;
    const value2 = 5;

    test('debe de retornar los alores por defecto', () => {
        
        const {result } = renderHook(() => useCounter());
        
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe de generar el counter con el valor de 100', () => {
        const {result} = renderHook(() => useCounter(value));
        const {counter} = result.current;

        expect(counter).toBe(100);
    })
    
    test('debe de incrementar el contador', () => {
        
        const {result} = renderHook(() => useCounter(value));
        const {counter, increment} = result.current;

        act(() => {
            increment(value2)
            increment()
        })
        expect(result.current.counter).toBe(106);

    })

    test('debe de decrementar el contador', () => {
        
        const {result} = renderHook(() => useCounter(value));
        const {counter, decrement} = result.current;

        act(() => {
            decrement(value2)
            decrement()
        })
        expect(result.current.counter).toBe(94);

    })

    test('debe de resetear el contador', () => {
        
        const {result} = renderHook(() => useCounter(value));
        const {counter, increment, decrement, reset} = result.current;

        act(() => {
            increment(value2)
            decrement()
            reset()
        })
        expect(result.current.counter).toBe(100);

    })

    

    
    
    
})
