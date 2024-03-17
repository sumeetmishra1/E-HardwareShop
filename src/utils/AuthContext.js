import React,{ useState } from "react"

const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token) =>{},
    logout:()=>{}
})

export const AuthContextProvider = (props) =>{
    const auth_token=localStorage.getItem('auth_token')
    const[token,setToken] = useState(auth_token)
    
    const userIsLoggedIn = !!token

    const loginHandler = (token) =>{
        setToken(token)
        localStorage.setItem('auth_token',token)
    }

    const logoutHandler = () =>{
        setToken(null)
        localStorage.removeItem('auth_token')
    }

    return(
        <AuthContext.Provider value={{token:token,isLoggedIn:userIsLoggedIn,login:loginHandler,logout:logoutHandler}}>{props.children}</AuthContext.Provider>
    )

}

export default AuthContext;