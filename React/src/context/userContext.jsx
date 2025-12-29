import { useContext,createContext, children, useState, useEffect } from "react";


const UserContext = createContext()

export const UserProvider = ({children}) =>{

    const [user,setUser] = useState({
        name:"Anmol Gupta",
        email:"anmolguptanpj282@gmail.com",
        role:"MERN developer",
    });


    








return (
    <UserContext.Provider value={{user,setUser}} >
        {children}
    </UserContext.Provider>
)

}

export const useUser = () =>{
    return useContext(UserContext)
}