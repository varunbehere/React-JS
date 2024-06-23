import { createContext, useContext } from "react";

export const AuthContext = createContext({
    users : [
        {
            email : '',
            userName: '',
            password : '',
            loginStatus : '',
        }
    ],
    registerUser: (email,userName,password)=>{},
    login : (email, password)=>{},
    logout: (email)=>{},
    currentUser : null,
})

export function useAuthContext (){
    return useContext(AuthContext)
}

export const AuthProvider = AuthContext.Provider