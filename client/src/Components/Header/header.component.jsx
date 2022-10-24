import React from "react";

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
                <div className="link"><span className="link-text">EVENTS</span></div>
                <div className="link"><span className="link-text">ABOUT</span></div>
                <div className="link"><span className="link-text">GLIMPSES</span></div>
                <div className="link"><span className="link-text">SCHEDULE</span></div>
                <div className="link"><span className="link-text">FAQ's</span></div>
                <div className="link"><span className="link-text">CONTACT</span></div>
            </div>
        </div>
    )
}

export default Header;