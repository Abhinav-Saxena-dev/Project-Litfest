import React from "react";

import {motion} from 'framer-motion';

import "./event-button.style.scss";

const EventButton = ({text, ...otherProps}) => {
  return (
    <motion.button whileHover={{scale : 1.1}} {...otherProps} className = "custom-button">
        {text}
    </motion.button>
  );
};

export default EventButton;