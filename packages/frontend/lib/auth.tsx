import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {auth} from './firebase';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';

type AuthState = {
    isAuthenticated: boolean;
    isRegistered: boolean;
}

interface AuthContextProps {
    authState: AuthState;
    login: (email: string, password: string) => void;
    logout: () => void;
    setAuthState: (state: (prev: AuthState) => AuthState) => void;
}


const AuthContext = createContext<AuthContextProps>({
    authState: {isAuthenticated: false, isRegistered: false},
    login: () => {
    },
    logout: () => {
    },
    setAuthState: () => {
    }
});


export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC = ({children}) => {
    const [authState, setAuthState] = useState<AuthState>({isAuthenticated: false, isRegistered: true});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setAuthState((prev) => ({...prev, isAuthenticated: true}))
            } else {
                setAuthState((prev) => ({...prev, isAuthenticated: false}))
            }
        })
        return () => unsubscribe();
    }, [])

    const login: (email: string, password: string) => void = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch(error){
            console.error("Login error: ", error)
        }
    }

    const logout: () => void = async () => {
        try {
            await signOut(auth);
        } catch(error){
            console.error("Logout error: ", error);
        }
    }


    return (
        <AuthContext.Provider value={{authState, login, logout, setAuthState}}>
            {children}
        </AuthContext.Provider>
    );
}


