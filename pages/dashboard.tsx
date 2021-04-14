import React from "react";
import { Dashboard } from "../src/components/Dashboard";
import { TDashboardProps } from "../src/props/TDashboardProps";
import { CardWebs } from "../src/components/CardWebs";
import { apiRoute } from "../src/config/apiRoute";

export default function DashboardHome({webs}: TDashboardProps) {
    return (
        <Dashboard title={"Dashboard"}>
            <CardWebs webs={webs}/>
        </Dashboard>
    )
}

export async function getStaticProps() {
    const webs = await fetch(apiRoute.get("webs")).then(rs => rs.json());
    return {
        props: {
            webs: webs.data || [],
        }
    }
}
