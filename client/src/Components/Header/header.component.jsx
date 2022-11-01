import React from "react";

import {motion} from 'framer-motion';

import "./header.style.scss";

const Header = () => {

    const handleClick = (e) => {
        const anchor = document.getElementById(e.target.innerHTML.toLowerCase())
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className="header">
            <div className="logo-container">
                <div className="logo">
                    <span>
                        LOGO
                    </span>
                </div>
            </div>
            <div className="links-container">
                <div className="link"><motion.span whileHover={{scale : 1.2}} className="link-text" onClick={handleClick}>ABOUT</motion.span></div>
                <div className="link"><motion.span whileHover={{scale : 1.2}} className="link-text" onClick={handleClick}>GLIMPSES</motion.span></div>
                <div className="link"><motion.span whileHover={{scale : 1.2}} className="link-text" onClick={handleClick}>EVENTS</motion.span></div>
                <div className="link"><motion.span whileHover={{scale : 1.2}} className="link-text" onClick={handleClick}>SCHEDULE</motion.span></div>
                <div className="link"><motion.span whileHover={{scale : 1.2}} className="link-text" onClick={handleClick}>FAQ's</motion.span></div>
                <div className="link"><motion.span whileHover={{scale : 1.2}} className="link-text" onClick={handleClick}>CONTACT</motion.span></div>
            </div>
        </div>
    )
}

export default Header;