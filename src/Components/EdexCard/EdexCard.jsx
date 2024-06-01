import React, { useState } from "react";

import './EdexCard.css';

import fileIcon from '../../assets/fileIcon.svg'

export default function EdexCard({imgPath, name}) {
    const [isExOpened, setIsExOpened] = useState(false);

    return(
        <>
        <div onTouchStart={() => setIsExOpened(true)} onDoubleClick={() => setIsExOpened(true)} className="edu-ex-card-container">
            <div className="edu-ex-icon-container">
                <img src={fileIcon} alt="File Icon" className="edu-ex-file-icon" />
            </div>
            <div className="edu-ex-card-name-container">
                {name}
            </div>
        </div>
        {
            isExOpened &&
            <>
                <div className="paper-container">
                    <img src={imgPath} className="paper" />
                    <div onClick={() => setIsExOpened(false)} className="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </div>
                </div>
                <div className="paper-backdrop"></div>
            </>
        }
        </>
    )
}