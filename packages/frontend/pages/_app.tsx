import '../styles/globals.css';


import type {AppProps} from 'next/app'
import {Nav} from "@/components/Nav/Nav";
import {AuthProvider, useAuth} from "@/lib/auth.tsx";
import LoginPage from "@/pages/login";
import SignUp from "@/pages/signup";
import React from "react";


export default function App({Component, pageProps}: AppProps) {

    return (
        <AuthProvider>
            <MainComponentWrapper Component={Component} pageProps={pageProps}></MainComponentWrapper>
        </AuthProvider>
    )
}


function MainComponentWrapper({Component, pageProps}: AppProps) {
    const {authState} = useAuth();

    return (
        <>
            {authState.isAuthenticated ? (
                <>
                    <Nav></Nav>
                    <Component {...pageProps}/>
                </>
            ) : (!authState.isAuthenticated && authState.isRegistered ? (
                    <>
                        <LoginPage/>
                    </>
                ) : <SignUp/>
            )
            }
        </>
    )

}


