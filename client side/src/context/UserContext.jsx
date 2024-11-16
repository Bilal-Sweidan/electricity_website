// axios 
import axios from 'axios'

// react cookies
// import { useCookies } from 'react-cookie'

// react
import { createContext , useEffect , useState } from "react";

// create context 
const UserContext = createContext()


export const UserProvider = ({ children }) => {
    const [user,setUser] = useState()
    return(
        <UserContext.Provider value={{user,setUser}}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContext;