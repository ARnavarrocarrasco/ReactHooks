import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHooks = () => {
    
    const {counter, increment, reset, decrement} = useCounter();

    const newValue = 1

    return (
        <>
            <h1>Counter with Hook: {counter}</h1> 
            <hr />

            <button className="btn btn-primary" onClick={() => increment(newValue)}>+{newValue}</button>
            <button className="btn btn-warning" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrement(newValue)}>-{newValue}</button>
        </>
    )
}

