import Link from "next/link";
import { Card } from "./Card";
import React from "react";

export const WhatIsThis = () => {
    return (
        <Card>
            <p>
                We are a computer services company in mallorca, we are dedicated to programming webs, apps, software
                and any application with more than 15 years of experience in the sector. if you are looking to
                perform any programming service we are your best choice of trust, serious and responsible in our
                work. ask us for budgets without commitment
            </p>
            <p>
                That is, instead of each of our services having a login / registration ..., for example musicians of
                the world, when you click on the login button it will take you to this page so that you can log in
                to any platform that we do. we offer.
            </p>
            <p>This platform is used to manage the authentication of all codeunic systems.</p>
            <p>Within auth.codeunic.com we can find a list of our own applications where this unique authentication
                system is used, apart, we will have our own dashboard to manage the user's configuration on any
                platform.</p>
            <Link href={"/"}>
                <a>
                    Go back
                </a>
            </Link>
        </Card>
    )
}
