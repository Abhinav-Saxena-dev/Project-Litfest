import React from "react";

import ImageSwipe from "../../Components/ImageSwipe/imageswipe.component";
import HeadingWithDash from './../../Components/Headingwdash/headingwdash.component';

import './glimpses.style.scss'

const Glimpses = () => {
    return(
        <div className="glimpses-past" id = {'glimpses'}>
            <div className="glimpses-heading">
                <HeadingWithDash text = {'GLIMPSES FROM THE PAST LITFEST EDITIONS'} color = {`white`}/>
            </div>
            <div className="glimpses-imageswipe">
                <ImageSwipe/>
            </div>
        </div>
    );
}

export default Glimpses;