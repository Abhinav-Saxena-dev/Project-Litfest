import React from "react";

import {motion, useInView} from 'framer-motion';

import './headingwdash.style.scss';
import { useRef } from "react";

const HeadingWithDash = ({text}) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return(
        <div className="headingwithdash">
            <div className="about-heading">
                <motion.div ref = {ref} 
                  style={{
                    transform: isInView ? "none" : "translateX(-100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                  }}
                className="about-heading-text">
                    <div className="text">{text}</div>
                </motion.div>
            </div>
        </div>
    );
}

export default HeadingWithDash;