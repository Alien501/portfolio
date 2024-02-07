import React from "react";

import './FAB.css'

import rocket from '../../assets/rocket fire.svg'

export default function FAB({isScrolled}) {
    return(
        <a href="#hero-section" className={`fab-container ${isScrolled? 'active': ''}`}>
            <img src={rocket} className="rocket" />
        </a>
    )
}