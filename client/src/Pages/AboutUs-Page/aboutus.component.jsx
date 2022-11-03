import React from "react";

import HeadingWithDash from "../../Components/Headingwdash/headingwdash.component";
import InformationText from "../../Components/InformationTextAnimation/information-text-animation.component";
import Date from "../../Components/Date/date.component";

import './aboutus.style.scss';

const AboutUs = () => {
    return(
        <div className="about-us-container" id = {'about'}>
            <div className="about-us-page-heading">
                <HeadingWithDash text = {'ABOUT THE EVENT'}/>
            </div>
            <div className="about-us-page-information">
                <InformationText/>
            </div>
            <div className="about-us-page-date">
                <Date eventDate={`11th, 12th & 14th November`} regEndDate = {`10th November`}/>
            </div>
        </div>
    )
}

export default AboutUs;