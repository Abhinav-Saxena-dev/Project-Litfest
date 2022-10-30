import React from "react";

import ScheduleTable from "../Schedule-table/schedule-table.component";
import schedule_data from "../../assets/event-schedule";

import './schedule.style.scss';

const Schedule = () => {

    return(
        <div className="schedule">
<           div className="schedule-table-heading">
                <div className="schedule-date-heading">DATE</div>
                <div className="schedule-event-time-heading">TIME</div>
                <div className="schedule-event-name-heading">EVENT</div>     
            </div>
            {
                schedule_data.map(({date, time, name}) =>
                <ScheduleTable date = {date} time = {time} name = {name}/>
                )
            }
        </div>
    );
}

export default Schedule;