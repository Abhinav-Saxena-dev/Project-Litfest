import React from "react";

import "./event-button.style.scss";

const EventButton = ({text}) => {
  return (
    <button className = "custom-button">
        {text}
    </button>
  );
};

export default EventButton;