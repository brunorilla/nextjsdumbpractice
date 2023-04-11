import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React from "react";
import variables from "@/styles/variables.module.scss";



export const Nav: React.FC = () => {
    return (
        <header className={styles.header + " " + variables.primaryColor}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link className={styles.link} href={"/"}>Home</Link>
                        <Link className={styles.link} href="/reservations/">Reservar</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}



