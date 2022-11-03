import React from "react";

import {motion} from 'framer-motion';

import logo from './../../assets/LitFest_Logo.png'

import "./header.style.scss";

const Header = () => {

    const handleClick = (e) => {
        const anchor = document.getElementById(e.target.innerHTML.toLowerCase())
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="header">
            <div className="logo-container">
                <motion.img whileHover={{scale : 1.2}} src={logo} alt="logo" className="logo_lit"/>
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