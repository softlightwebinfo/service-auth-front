import React from "react";
import styles from "../styles/components/Logo.module.scss"

export const Logo = ({isAnimation = true}) => (
    <a href="https://www.codeunic.com">
        <img
            src="/images/logo.png"
            className={isAnimation ? styles.Logo : styles.LogoNoAnimation}
            alt="Codeunic"
            title={"Code Unic"}
        />
    </a>
)
