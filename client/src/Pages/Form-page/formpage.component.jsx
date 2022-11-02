import React,{useEffect, useState} from "react";

import FormInput from "../../Components/Form-input/form-input.component";
import EventButton from './../../Components/Event-Button/event-button.component';
import FormDrop from "../../Components/Dropdown/dropdown.component";

import data from './../../assets/register-data';
import branch from './../../assets/branch';
import year from './../../assets/year';

import {useHistory} from 'react-router-dom';

import axios from 'axios'

import "./formpage.style.scss";

const FormPage = (props) => {


  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

    const history = useHistory()

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
        answer : "",
    })

    const base = 'http://localhost:8000/'

    if(event === 'creative-writing'){
        flag+=1
    }

    const checkEvent = (flag) => {
      if(!flag){
        delete participant.answer
      }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        checkEvent(flag);
        const url = `http://localhost:8000/${event}`
        const response = await axios.post(url, participant)
        console.log(response);
        setParticipant({
          uname : "",
          email : "",
          number : "",
          dept : "",
          uid : "",
          year : "",
          answer : "",
      })
      history.goBack()
    }
    
    const handleChange = (event) => {
        const {value, name} = event.target;
        console.log(participant);
        setParticipant((prev) => {
            return {...prev, [name] : value };
        });
    }

    const handleChangeSelect = (item, name) => {
      const {value} = item
      setParticipant((prev) => {
          return {...prev, [name] : value };
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
        <form className="form" onSubmit={handleSubmit}>
            <FormInput name = "uname" type = 'text' value = {participant.uname} handleChange={handleChange} label = "Name" required/>
            <FormInput name = "email" type = 'email' value = {participant.email} handleChange={handleChange} label = "Email" required/>
            <FormInput name = "number" type = 'number' value = {participant.number} handleChange={handleChange} label = "Number" required/>
            <FormInput name = "uid" type = 'number' value = {participant.uid} handleChange={handleChange} label = "University Roll Number" required/>
            <FormDrop handleChange={handleChangeSelect} name = 'dept' list = {branch} title = 'Select Department'/>
            <FormDrop handleChange={handleChangeSelect} name = 'year' list = {year} title = 'Select Year'/>
            {
              flag ?
              <div className="text-area-form">
            <textarea name = "answer" onChange={handleChange} placeholder = 'Enter your answer here' className="answer-text" required/>
            </div>
            :
            null
            }
            <div className={`submit-button ${flag ? 'down' : ''}`}>
            <EventButton text={'Submit'} type = 'submit' />
            </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
