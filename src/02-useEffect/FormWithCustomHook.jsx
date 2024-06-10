import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, handleInputChange, username, email, password, onResetForm} = useForm(
        {
            username : "",
            email: "",
            password: ""
        }
    );

    // const {username, email, password} = formState;


    return (
        <>
            <h1>Formulario With Custom Hook</h1>
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

                <input 
                    type="password" 
                    name="password" 
                    className="form-control mt-2"
                    placeholder="Contraseña"  
                    value={password}
                    onChange={handleInputChange}
                />
            </form>

            <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
            
        </>
    )
}


