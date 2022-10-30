import React from "react";

import HeadingWithDash from "../../Components/Headingwdash/headingwdash.component";
import Schedule from "../../Components/Schedule/schedule.component";

import './schedule-page.style.scss';

const SchedulePage = () => {
    return(
        <div className="schedule-page">
            <div className="schedule-page-heading">
                <HeadingWithDash text = {`LITFEST SCHEDULE`}/>
            </div>
            <div className="schedule-page-canvas">

            </div>
        </div>
    );
}

export default SchedulePage;