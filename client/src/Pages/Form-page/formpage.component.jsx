import React, { useEffect, useState } from "react";

import FormInput from "../../Components/Form-input/form-input.component";
import EventButton from "./../../Components/Event-Button/event-button.component";
import FormDrop from "../../Components/Dropdown/dropdown.component";

import data from "./../../assets/register-data";
import branch from "./../../assets/branch";
import year from "./../../assets/year";
import choice from "../../assets/debate_choice";

import { useHistory } from "react-router-dom";

import axios from "axios";

import "./formpage.style.scss";

const FormPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();

  const event = props.match.params.event;
  let flag = 0;

  const { content, logo, title_event} = data.find(({ id }) => id === event);

  const [participant, setParticipant] = useState({
    uname: "",
    email: "",
    number: "",
    dept: "",
    uid: "",
    year: "",
    answer: "",
    choice : "",
  });

  const base = "http://localhost:8000/";

  if (event === "creative-writing") {
    flag += 1;
  }

  const checkEvent = (flag) => {
    if (!flag) {
      delete participant.answer;
    }
    if(event !== 'debate'){
      delete participant.choice
    }
  };

  const checkValues = () => {
    if(participant.number < 1000000000 || participant.number > 9999999999){
      alert('Phone number has to be 10 digits in length. Please Correct and Retry.')
      return false;
    }
    if(participant.uid < 1000000000000 || participant.uid > 9999999999999){
      alert('University roll number has to be 13 digits in length. Please Correct and Retry.')
      return false;
    }
    if(!participant.dept){
      alert('Please select your department and try again.')
      return false;
    }
    if(!participant.year){
      alert('Please select your year and try again.')
      return false;
    }
    if(event === 'debate' && !participant.choice){
      alert('Please select the theme of debate and try again.')
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkEvent(flag);
    if(!checkValues()){
      return false
    }
    console.log(participant);
    const url = `http://localhost:8000/${event}`;
    try{
      const response = await axios.post(url, participant);
      console.log(response);
      setParticipant({
        uname: "",
        email: "",
        number: "",
        dept: "",
        uid: "",
        year: "",
        answer: "",
        choice : "",
      });
      if(response){
        alert(`You have been successfully registered for ${title_event}. Press okay to go back`)
        history.goBack()
      }
    }catch (e){ 
      alert('You have not been registered, an error has occured. Please check all fields, or you may have already registered or check your internet connection and try again. Contact us if problem persists.')
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setParticipant((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleChangeSelect = (item, name) => {
    const { value } = item;
    setParticipant((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={`form-page ${event === 'debate' || event === 'creative-writing' ? 'inc-len' : ''}`}>
      <div className="form-page-logo">
        <img src={logo} alt="LOGO" className="form-debate-logo" />
      </div>
      <div className="form-page-description">
        <p className="form-desc">{content}</p>
      </div>
      {
        event === 'creative-writing' ?
      <div className="form-page-description">
        <p className="form-desc"><b>Answer all the questions mentioned below in the text-area provided in the form.<br></br> Maximum number of words for each answer is 80.</b><br></br><b>Q1.</b> Mention a story of your liking. (The story should be published in public domain, in the form of a book, web series, movie, story, etc)<br></br><b>Q2.</b> Why did you choose this story?<br></br><b>Q3.</b> If you could change something about the story, what would it be, and why?  </p>
      </div>
      :null
      }
      <div className={`form-page-form ${event === 'debate' ? 'inc-len' : ''}`}>
        <div className="form-heading">REGISTER</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-page-inputs">
            <FormInput
              name="uname"
              type="text"
              value={participant.uname}
              handleChange={handleChange}
              label="Name"
              required
            />
            <FormInput
              name="email"
              type="email"
              value={participant.email}
              handleChange={handleChange}
              label="Email"
              required
            />
            <FormInput
              name="number"
              type="number"
              value={participant.number}
              handleChange={handleChange}
              label="Phone Number"
              required
            />
            <FormInput
              name="uid"
              type="number"
              value={participant.uid}
              handleChange={handleChange}
              label="University Roll Number"
              required
            />
            <FormDrop
              handleChange={handleChangeSelect}
              name="dept"
              list={branch}
              title="Select Department"
            />
            <FormDrop
              handleChange={handleChangeSelect}
              name="year"
              list={year}
              title="Select Year"
              required
            />
            {
              event === 'debate' ?
              <FormDrop
              handleChange={handleChangeSelect}
              name="choice"
              list={choice}
              title="Select Theme"
              required
            />
            : null
            }
            <div className={`submit-button ${flag ? "down" : ""}`}>
              <EventButton text={"Submit"} type="submit" />
            </div>
          </div>
          {
          flag ? (
            <div className="text-area-form">
              <textarea
                name="answer"
                onChange={handleChange}
                placeholder="Enter all the answers in this Text-Area. Mention clearly which answer is meant for which question."
                className="answer-text"
                required
              />
            </div>
          ) : null
          }
        </form>
      </div>
    </div>
  );
};

export default FormPage;