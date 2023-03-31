import '../styles/globals.css';

import type {AppProps} from 'next/app'
import {Nav} from "@/components/Nav";


export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Nav></Nav>
            <Component  {...pageProps} />
        </>
    )
}
