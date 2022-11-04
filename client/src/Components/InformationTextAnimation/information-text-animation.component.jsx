import React, { useRef } from "react";

import {motion, useInView} from 'framer-motion';

import "./information-text-animation.style.scss";

const InformationText = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once : true})
    const ref2 = useRef(null)
    const isInView2 = useInView(ref2, {once : true})
  return (
    <div className="information-text-animation">
      <motion.div 
        ref = {ref} 
        style={{
          transform: isInView ? "none" : "translateY(70px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}
        className="paragraph first-paragraph">
        <p className="paragraph-text">
        Confined by the monotonicity of life, we often ignore the essence of creativity and zest for literature resting inside us. Thus, to break the barriers restricting our Shakespearean persona, the Odyssey- literary society feels honored to present to you an experience like never before, the second edition of the LitFest- One stop for all literary enthusiasts. LitFest is a podium perfect for showcasing your literary skills and igniting intellectual thoughts. Litfest transcends to an emotion that combines the zeal and desire of scholars to explore their uniqueness and find the literati hiding within.
        </p>
      </motion.div>
      <motion.div className="paragraph"
      ref = {ref2} 
      style={{
        transform: isInView2 ? "none" : "translatex(70px)",
        opacity: isInView2 ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }}
      >
        <p className="paragraph-text">It's a three-day extravaganza being conducted on intra-college level, replete with exciting events, literary stalls, competitions, and a plethora of surprises that await your gaze. Register now, and sail to the unknown! </p>
      </motion.div>
    </div>
  );
};

export default InformationText;
