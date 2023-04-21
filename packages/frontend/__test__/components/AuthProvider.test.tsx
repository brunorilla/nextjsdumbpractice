import {AuthContext, AuthContextProps} from "@/lib/auth";
import React, {createContext} from "react";

const MockAuthContext = createContext<AuthContextProps>({
    authState: {isAuthenticated: false, isRegistered: false},
    login: jest.fn(),
    logout: jest.fn(),
    setAuthState: jest.fn()
})



export const MockedAuthProvider: React.FC = ({children}) => {

    const authState = {isAuthenticated: false, isRegistered: false};
    const login = jest.fn();
    const logout = jest.fn();
    const setAuthState = jest.fn();


    return (
        <MockAuthContext.Provider value={{login, logout, authState, setAuthState}}>
            {children}
        </MockAuthContext.Provider>
    );
};
