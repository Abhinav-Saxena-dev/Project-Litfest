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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
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
        <p className="paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit vel ipsum vehicula semper. Phasellus eu neque nec nisi pretium mattis. Quisque risus magna, volutpat sed tincidunt ultricies, volutpat eget orci. </p>
      </motion.div>
    </div>
  );
};

export default InformationText;
