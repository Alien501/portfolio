import React from "react";

import './FAB.css'

import rocket from '../../assets/rocket fire.svg'

export default function FAB() {
    return(
        <a href="#hero-section" className="fab-container">
            <img src={rocket} className="rocket" />
        </a>
    )
}