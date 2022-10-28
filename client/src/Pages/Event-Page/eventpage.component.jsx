import React from 'react';
import HeadingWithDash from './../../Components/Headingwdash/headingwdash.component';
import Event from '../../Components/Event/event.component';

import './eventpage.style.scss';

const EventPage = () => {
    return(
        <div className="event-page">
            <div className="event-page-heading">
                <HeadingWithDash text={'LITFEST EVENTS'}/>
            </div>
            <div className="event-page-events">
                <Event/>
            </div>
        </div>
    );
}

export default EventPage;