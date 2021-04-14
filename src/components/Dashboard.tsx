import React from "react";
import styles from "../styles/components/Dashboard.module.scss";
import { Navbar } from "./Navbar";
import { Logo } from "./Logo";
import Head from "next/head";

export const Dashboard = (props) => {
    return (
        <section className={styles.Dashboard}>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Logo isAnimation={false} className={styles.Logo}/>
            <Navbar/>
            <main>{props.children}</main>
        </section>
    )
};
