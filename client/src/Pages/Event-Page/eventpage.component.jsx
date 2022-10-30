import React from 'react';
import HeadingWithDash from './../../Components/Headingwdash/headingwdash.component';
import Event from '../../Components/Event/event.component';

import Data from './../../assets/event_data'

import './eventpage.style.scss';

const EventPage = () => {

    return(
        <div className="event-page">
            <div className="event-page-heading">
                <HeadingWithDash text={'LITFEST EVENTS'}/>
            </div>
            <div className="event-page-events">
                {Data.map(({event_no, event_desc, event_name, Logo}) => 
                <Event event_no={event_no} event_desc = {event_desc} event_name = {event_name} Logo = {Logo}/>
                )}
            </div>
        </div>
    );
}

export default EventPage;