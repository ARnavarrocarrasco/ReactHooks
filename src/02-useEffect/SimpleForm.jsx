import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] =  useState({
        username : "Anthony",
        email: "thony@gmail.com"
    });

    const {username, email} = formState;

    const handleInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    //Un arreglo vacío significa que solo se ejecute una vez
    useEffect(() => {
        console.log("useEffect se disparo!!")
    }, []);

    //Se recomienda usar efectos especializados y específicos por cada acción 
    // o efecto que se quiera ejecutar
    useEffect(() => {
        console.log("formState changed!")
    }, [formState]);

    useEffect(() => {
        console.log("email changed!")
    }, [email]);

    useEffect(() => {

    
        //Función del cleanup.
        return () => {

        }
    }, []);
   

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <form>
                <input 
                    type="text" 
                    className="form-control mt-2"
                    name="username" 
                    placeholder="Username"
                    value={username}
                    onChange={handleInputChange}
                />

                <input 
                    type="email" 
                    name="email"
                    className="form-control mt-2"
                    placeholder="thony@gmail.com"
                    value={email}
                    onChange={handleInputChange}
                />
            </form>
            {
                username === "Anthony" && <Message/>
            }
        </>
    )
}


