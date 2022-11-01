import React,{useEffect, useState} from "react";

import FormInput from "../../Components/Form-input/form-input.component";
import EventButton from './../../Components/Event-Button/event-button.component';

import data from './../../assets/register-data';

import "./formpage.style.scss";

const FormPage = (props) => {

    const event = props.match.params.event
    let flag = 0

    const {content, logo} = data.find(({id}) => id === event)

    const [participant, setParticipant] = useState({
        uname : "",
        email : "",
        number : "",
        dept : "",
        uid : "",
        year : "",
    })

    if(event === 'creative writing'){
        participant.answer = ''
        flag+=1
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    }
    
    const handleChange = (event) => {
        const {value, name} = event.target;
        setParticipant((prev) => {
            return {...prev, [name] : value};
        });
    }

  return (
    <div className="form-page">
      <div className="form-page-logo">
        <img src={logo} alt="LOGO" className="form-debate-logo" />
      </div>
      <div className="form-page-description">
        <p className="form-desc">
          {content}
        </p>
      </div>
      <div className="form-page-form">
        <div className="form-heading">
            REGISTER
        </div>
        <form className="form">
            <FormInput name = "uname" type = 'text' value = {participant.uname} handleChange={handleChange} label = "Name"/>
            <FormInput name = "email" type = 'email' value = {participant.email} handleChange={handleChange} label = "Email"/>
            <FormInput name = "number" type = 'number' value = {participant.number} handleChange={handleChange} label = "Number"/>
            <FormInput name = "uid" type = 'number' value = {participant.uid} handleChange={handleChange} label = "University Roll Number"/>
            <FormInput name = "dept" type = 'text' value = {participant.dept} handleChange={handleChange} label = "Department"/>
            <FormInput name = "year" type = 'number' value = {participant.year} handleChange={handleChange} label = "Year"/>
            <div className="text-area-form">
            <textarea name = "answer" onChange={handleChange} placeholder = 'Enter your answer here' className="answer-text"/>
            </div>
            <div className={`submit-button ${flag ? 'down' : ''}`}>
            <EventButton text={'Submit'} type = 'submit' />
            </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
