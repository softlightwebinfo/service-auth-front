import React from "react";
import { Dashboard } from "../../src/components/Dashboard";
import { WhatIsThis } from "../../src/components/WhatIsThis";

export default function WhatIsThisPage() {
    return (
        <Dashboard title={"What is this"}>
            <WhatIsThis/>
        </Dashboard>
    )
}
