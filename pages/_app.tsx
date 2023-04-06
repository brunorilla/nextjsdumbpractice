import '../styles/globals.css';

import type {AppProps} from 'next/app'
import {Nav} from "@/components/Nav";
import {useEffect, useState} from "react";
import {checkAuthentication} from "@/lib/auth";
import {LoginPage} from "@/components/login/LoginPage";
import SignUp from "@/pages/signup";


export default function App({Component, pageProps}: AppProps) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isRegistered, setIsRegistered] = useState<boolean>(false);

    useEffect(() => {
        const userIsLoggedIn = checkAuthentication();
        setIsLoggedIn(userIsLoggedIn);
    }, [])

    if (!isLoggedIn) {
        return (
            <>
                <LoginPage/>
            </>
        )
    } else if (!isRegistered) {
        return (
            <SignUp/>
        )
    }

    return (
        <>
            <Nav></Nav>
            <Component  {...pageProps} />
        </>
    )
}
