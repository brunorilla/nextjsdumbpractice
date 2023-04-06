import React from "react";
import styles from "@/styles/Home.module.css";
import {LogInWrapper} from "@/components/LogInWrapper";
import Link from "next/link";


export const LoginPage: React.FC = () => {
    return (<div className={styles.main}>
        <div>
        </div>
        <LogInWrapper/>
        <div><h4>¿No es usuario? </h4><Link href={"/signup"}>Regístrese</Link></div>

    </div>)
}