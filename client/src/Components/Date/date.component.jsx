import React from "react";

import {motion, useInView} from 'framer-motion';

import './date.style.scss';
import { useRef } from "react";

const Date = ({eventDate, regEndDate}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once : true})
    return(
        <motion.div 
        ref = {ref}
        style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
          }}
        className="date-container">
            <div className="date-box">
                <div className="date-heading">Event Dates :</div>
                <div className="date-text">{eventDate}</div>
            </div>
            <div className="date-box">
                <div className="date-heading">Registrations ends on :</div>
                <div className="date-text smaller">{regEndDate}</div>
            </div>
        </motion.div>
    );
}

export default Date;