import React from "react";
import styles from "../styles/components/Navbar.module.scss"
import Link from "next/link";
export const Navbar = (props) => {
    return (
        <header className={styles.Navbar}>
            <nav>
                <ul>
                    <li>
                        <Link href={"/dashboard"}>
                            <a>Dashboard</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/dashboard/what-is-this"}>
                            <a>What's this?</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/dashboard/setting"}>
                            <a>Setting</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
