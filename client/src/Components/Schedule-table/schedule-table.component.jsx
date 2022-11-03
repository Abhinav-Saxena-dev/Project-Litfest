import React from "react";

import {motion} from 'framer-motion';

import './schedule-table.style.scss';

const ScheduleTable = ({date, time, name}) => {
    return(
        <div className="schedule-table">
            <motion.div whileHover={{scale : 1.15, }} className="schedule-table-content"> 
                <div className="schedule-date">{date}</div>
                <div className="schedule-event-time">{time}</div>
                <div className="schedule-event-name">{name}</div>
            </motion.div>
        </div>
    );
}

export default ScheduleTable;