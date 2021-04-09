import React from "react";
import Link from "next/link";
import styles from "../styles/components/Buttons.module.scss";

export const Buttons = ({login = false, register = false, recovery = false}) => {
    return (
        <div className={styles.Buttons}>
            {login && (
                <>
                    <Link href="/register">
                        <a>Create account</a>
                    </Link>
                    <Link href="/recovery-account">
                        <a>Recovery account</a>
                    </Link>
                </>
            )}
            {register && (
                <>
                    <Link href="/">
                        <a>Login account</a>
                    </Link>
                    <Link href="/recovery-account">
                        <a>Recovery account</a>
                    </Link>
                </>
            )}
            {recovery && (
                <>
                    <Link href="/register">
                        <a>Create account</a>
                    </Link>
                    <Link href="/">
                        <a>Login account</a>
                    </Link>
                </>
            )}
            <div className={styles.Row}>
                <Link href={"/what-is-this"}>
                    <a>What's this?</a>
                </Link>
            </div>
        </div>
    );
};
