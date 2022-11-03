import React from "react";

import { motion } from "framer-motion";

import "./register-btn.style.scss";

const RegisterButton = () => {
  
  const handleClick = (e) => {
    const anchor = document.getElementById('events')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

  return (
    <div className="container">
    <div className="button-container">
      <span className="mask">Register</span>
      <motion.button onClick={handleClick}
      whileTap= {{scale : 0.9}}
      type="button" name="Hover">Realise!</motion.button>
    </div>
  </div>
  );
};

export default RegisterButton;
