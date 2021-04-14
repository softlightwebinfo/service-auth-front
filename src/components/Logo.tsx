import React from "react";
import styles from "../styles/components/Logo.module.scss"

export const Logo = ({isAnimation = true, className = ""}) => (
    <a href="https://www.codeunic.com" className={className}>
        <img
            src="/images/logo.png"
            className={isAnimation ? styles.Logo : styles.LogoNoAnimation}
            alt="Codeunic"
            title={"Code Unic"}
        />
    </a>
)
