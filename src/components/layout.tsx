import Head from 'next/head'
import React from "react";
import styles from "../styles/components/Layout.module.scss";

export default function Layout({children, title}) {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>{title} | Code Unic</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta
          name="description"
          content="We are a computer services company in Mallorca, we are dedicated to programming Webs, APPs, software and any application with more than 15 years of experience in the sector. If you are looking to perform any programming service we are your best choice of trust, serious and responsible in our work. ASK US FOR BUDGETS WITHOUT COMMITMENT"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title}/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <main>{children}</main>
    </div>
  )
}
