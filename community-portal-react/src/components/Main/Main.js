import React from "react"

import Panels from "./Panels/Panels"
import News from "./News/News"

export default function Main() {
    return (
        <div className="mainBoy">
            <h2>Main</h2>
            <Panels />
            <News />
        </div>
    );
}