import React from "react";

import {motion} from 'framer-motion';

import "./header.style.scss";

const Header = () => {
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
                <div className="link"><motion.span whileHover={{scale : 1.2}} className="link-text">ABOUT</motion.span></div>
                <div className="link"><motion.span whileHover={{scale : 1.2}} className="link-text">GLIMPSES</motion.span></div>
                <div className="link"><motion.span whileHover={{scale : 1.2}} className="link-text">EVENTS</motion.span></div>
                <div className="link"><motion.span whileHover={{scale : 1.2}} className="link-text">SCHEDULE</motion.span></div>
                <div className="link"><motion.span whileHover={{scale : 1.2}} className="link-text">FAQ's</motion.span></div>
                <div className="link"><motion.span whileHover={{scale : 1.2}} className="link-text">CONTACT</motion.span></div>
            </div>
        </div>
    )
}

export default Header;