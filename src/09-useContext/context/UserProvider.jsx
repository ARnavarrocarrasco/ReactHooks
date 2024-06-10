import { useState } from "react"
import { UserContext } from "./UserContext"


export const UserProvider = ({children}) => {
    
    // const user = {
    //     id: 123,
    //     name: 'Anthony Navarro',
    //     email: "Anthony@google.com"
    // }
    
    const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{hola: 'Mundo', user: user}}>
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
