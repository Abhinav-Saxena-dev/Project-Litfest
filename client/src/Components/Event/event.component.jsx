import React, {useRef} from "react";
import { useInView, motion } from "framer-motion";

import EventButton from "../Event-Button/event-button.component";

import { useHistory } from "react-router-dom";

import "./event.style.scss";


const Event = ({event_no, event_desc, event_name, Logo}) => {
  
  const history = useHistory();

  const ref = useRef(null)
  const isInView = useInView(ref, {once : true})

  const ref2 = useRef(null)
  const isInView2 = useInView(ref2, {once : true})

  const scaling = event_name === 'DEBATE' ? 1.02 : 1.15;

  const handleClick = () => {
    history.push(`/register/${event_name.toLowerCase()}`)
  }



  return (
    <div className="event-component">
        <p className="background-text">{event_no}</p>
      <div className="event-heading-container">
        <motion.div
        ref = {ref} 
        style={{
          transform: isInView ? "none" : "scale(2)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="event-serialno">
          <span className="serialno">
            <i>{event_no}</i>
          </span>
        </motion.div>
        <motion.div
        ref = {ref} 
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
        className="event-heading">
          <span className="event-heading-text">{event_name}</span>
        </motion.div>
      </div>
      <div className="event-content-container">
        <div className="event-descbtn-container">
          <motion.div 
          ref = {ref2} 
          style={{
            transform: isInView2 ? "none" : "translateX(-100px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
          }}
          className="description-container">
            <p className="description">{event_desc}</p>
          </motion.div>
          <motion.div 
          ref = {ref2} 
          style={{
            transform: isInView2 ? "none" : "translateY(100px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
          }}
          className="event-register-btn">
            <EventButton text = {`Register / Explore`} onClick = {handleClick}/>
          </motion.div>
        </div>
        <div className="event-image-container">
          <motion.img whileHover={{scale : scaling}} src={Logo} className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Event;
