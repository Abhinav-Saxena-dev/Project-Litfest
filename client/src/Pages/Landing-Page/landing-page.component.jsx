import React from "react";

import Header from "../../Components/Header/header.component";
import LitFestTitle from "../../Components/Litfest-title/litfest-title.component";
import CountDown from "../../Components/Countdown/countdown.component";
import RegisterButton from "../../Components/Register-Button/register-btn.component";

import './landing-page.component.scss';

const LandingPage = () => {

    return (
        <div className="landing-page">
            <div className="page-header">
                <Header/>
            </div>
            <div className="page-title">
                <LitFestTitle />
            </div>
            <div className="page-countdown">
                <CountDown targetDate = {{year : 2022, month : 10, date : 11}}/>
            </div>
            <div className="register-btn">
                <RegisterButton/>
            </div>
        </div>
    );
}

export default LandingPage;