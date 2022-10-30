import React from "react";

import './schedule-table.style.scss';

const ScheduleTable = ({date, time, name}) => {
    return(
        <div className="schedule-table">
            <div className="schedule-table-content"> 
                <div className="schedule-date">{date}</div>
                <div className="schedule-event-time">{time}</div>
                <div className="schedule-event-name">{name}</div>
            </div>
        </div>
    );
}

export default ScheduleTable;