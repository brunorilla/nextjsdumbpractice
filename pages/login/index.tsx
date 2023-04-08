import React from "react";
import styles from "@/styles/Home.module.css";
import {LogInWrapper} from "@/components/login/LogInWrapper";
import {useAuth} from "@/lib/auth";
import Link from "next/link";


const LoginPage: React.FC = () => {

    const {setAuthState} = useAuth();

    return (
        <>
            <div className={styles.main}>
                <LogInWrapper/>
                <div><h4>¿No es usuario? </h4><Link href={"/signup"}
                                                    onClick={() => setAuthState(prev => ({...prev, isRegistered: false}))}>Regístrese
                </Link>
                </div>


            </div>
        </>)
}


export default LoginPage;