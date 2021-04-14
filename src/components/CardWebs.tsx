import { TCardWebsProps } from "../props/TCardWebsProps";
import React from "react";
import styles from "../styles/components/CardWebs.module.scss"
import { apiRoute } from "../config/apiRoute";
import { useAppContext } from "../context/AppContext";

export const CardWebs = ({webs}: TCardWebsProps) => {
    const {token} = useAppContext();
    return (
        <section className={styles.CardWebs}>
            {webs.map(web => (
                <article key={web.web} className={styles.Article}>
                    <a title={web.web} href={`${web.url}?token=${token}`} target={"_website"}>
                        <img src={apiRoute.getImage(web.image)} alt={web.web} title={web.web}/>
                        <p>{web.web}</p>
                    </a>
                </article>
            ))}
        </section>
    )
}
