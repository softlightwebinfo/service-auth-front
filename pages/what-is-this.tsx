import Layout from "../src/components/layout";
import React from "react";
import { Logo } from "../src/components/Logo";
import { WhatIsThis } from "../src/components/WhatIsThis";

export default function WhatIsThisPage({}) {
    return (
        <Layout title={"What is this"}>
            <Logo isAnimation={false}/>
            <WhatIsThis/>
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}
