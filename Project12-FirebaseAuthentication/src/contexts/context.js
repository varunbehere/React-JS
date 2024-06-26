import { createContext, useContext } from "react";

const AuthContext = createContext({
    login: () => {},
    logout: () => {},
    signUp: () => {},
    currentUser: null,
    userRegistrationStatus: null,
    loginStatus: null,
});

export const AuthContextProvider = AuthContext.Provider;

export const useAuthContext = () => {
    return useContext(AuthContext);
};