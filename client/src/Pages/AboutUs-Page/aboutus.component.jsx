import React from "react";

import HeadingWithDash from "../../Components/Headingwdash/headingwdash.component";

import './aboutus.style.scss';

const AboutUs = () => {
    return(
        <div className="about-us-container">
            <div className="about-us-page-heading">
                <HeadingWithDash text = {'ABOUT THE EVENT'}/>
            </div>
            <div className="about-us-page-information">
                
            </div>
        </div>
    )
}

export default AboutUs;