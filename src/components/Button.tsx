import React from "react";
import styles from "../styles/components/Button.module.scss"
import { Loader } from "./Loader";

export const Button = ({children, type, loader = false}) => {
    return (
        <button
            className={styles.Button}
            type={type}
            disabled={loader}
        >
            {loader ? <Loader size={20}/> : children}
        </button>
    )
}
