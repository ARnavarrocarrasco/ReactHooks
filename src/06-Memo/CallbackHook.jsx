import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    
    const incrementFather = useCallback((value) => {
        setCounter(
            (c) => c + value
        )
    }, []);

    useEffect(() => {
        
    }, [incrementFather])


    return (
        <>
            <h1>useCallback hook: {counter}</h1> 
            <hr />

            <ShowIncrement increment={incrementFather}/>


        </>
    )
}

export default CallbackHook
