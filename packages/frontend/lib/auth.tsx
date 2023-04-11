import {createContext, ReactNode, useContext, useState} from 'react';

type AuthState = {
    isAuthenticated: boolean;
    isRegistered: boolean;
}

interface AuthContextProps {
    authState: AuthState;
    login: () => void;
    logout: () => void;
    setAuthState: (state: (prev: AuthState) => AuthState) => void;
}


const AuthContext = createContext<AuthContextProps>({
    authState: {isAuthenticated: false, isRegistered: false},
    login: () => {
    },
    logout: () => {
    },
    setAuthState: ()=> {}
});


export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC = ({children}) => {
    const [authState, setAuthState] = useState<AuthState>({isAuthenticated: false, isRegistered: true});

    const login: () => void = () => {
        setAuthState((prev) => ({...prev, isAuthenticated: true}));
    }

    const logout: () => void = () => {
        setAuthState(prev => ({...prev, isAuthenticated: false}));
    }


    return (
        <AuthContext.Provider value={{authState, login, logout, setAuthState}}>
            {children}
        </AuthContext.Provider>
    );
}


