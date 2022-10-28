import React, {useRef} from "react";
import { useInView, motion } from "framer-motion";

import { ReactComponent as Logo } from "./../../assets/undraw_mic_drop_uuyg.svg";

import "./event.style.scss";

const Event = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const ref2 = useRef(null)
    const isInView2 = useInView(ref)


  return (
    <div className="event-component">
        <p className="background-text">#001</p>
      <div className="event-heading-container">
        <motion.div
        ref = {ref} 
        style={{
          transform: isInView ? "none" : "scale(5)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className="event-serialno">
          <span className="serialno">
            <i>#001</i>
          </span>
        </motion.div>
        <motion.div
        ref = {ref} 
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
        }}
        className="event-heading">
          <span className="event-heading-text">THE CONTROVERSIAL ARC</span>
        </motion.div>
      </div>
      <div className="event-content-container">
        <div className="event-descbtn-container">
          <div className="description-container">
            <p className="description">Pellentesque in finibus justo. Suspendisse facilisis sem
              ante. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus congue vestibulum gravida. In in mauris et massa commodo
              tincidunt. Mauris aliquam enim laoreet suscipit eleifend.
              Suspendisse consequat lorem eu felis bibendum, a posuere arcu
              egestas. Cras pulvinar risus sit amet arcu tempus posuere.
              Curabitur tempor, orci nec gravida molestie, justo erat pharetra
              urna, non commodo elit neque sit amet odio.</p>
          </div>
          <div className="event-register-btn"></div>
        </div>
        <div className="event-image-container">
          <Logo className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Event;
