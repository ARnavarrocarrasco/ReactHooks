import { useRef } from "react"


export const FocusScreen = () => {

    const inputRef = useRef();
    

    const onClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={inputRef}
                type="text"
                className="form-control" 
                placeholder="Ingrese su nombre" 
            />

            <button onClick={onClick} className="btn btn-primary mt-1">
                Set Focus
            </button>
        </>
  )
}


