import React from "react"

import Products from "./Products/Products"
import Services from "./Services/Services"
import Testimonial from "./Testimonial/Testimonial"

export default function Panels() {
    return (
        <div className="Panels">
            <h3>Panels</h3>
            <Products />
            <Services />
            <Testimonial />
        </div>
    );
}