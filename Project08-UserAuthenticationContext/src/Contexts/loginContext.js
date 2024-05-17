import React, { createContext, useContext } from "react";

export const LoginContext = createContext({
    loginArray : {
        userId: 0,
        email : '',
        password:'',
        loggedIn: false,
    },
    proceedLogin : (email,password) => {}
});

export const LoginContextProvider = LoginContext.Provider

export const useLoginContext = ()=>{
    return useContext(LoginContext)
}