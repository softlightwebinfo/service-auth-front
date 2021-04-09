import { TCardProps } from "../props/TCardProps";
import React from "react";
import styles from "../styles/components/Card.module.scss";

export const Card = (props: TCardProps) => {
    return (
        <div className={styles.Card}>
            {props.children}
        </div>
    );
}
