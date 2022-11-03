import React from "react";

import {motion} from 'framer-motion';

import odyssey from './../../assets/Odyssey_logo.png';
import {ReactComponent as Logo} from './../../assets/call_FILL1_wght700_GRAD200_opsz48.svg'

import './contactus.style.scss';

const ContactUs = () => {
    return(
        <div className="contact-us-page" id = {'contact'}>
            <div className="contactus-page-logo">
                <motion.img whileHover={{scale : 1.1}} src={odyssey} alt="" className="odyssey_logo"/>
            </div>
            <div className="contactus-page-details">
                <div className="details-numbers">
                    <div className="number-heading">
                        <div className="number-heading-logo">
                            <Logo className = "phone-logo"/>
                        </div>
                        <div className="number-heading-logo">
                            <Logo className = "phone-logo"/>
                        </div>
                    </div>
                    <div className="member-number-container">
                        <div className="member-number">&nbsp; Vandana Arora &nbsp;&nbsp;:&nbsp;&nbsp;+91 6395209436</div>
                        <div className="member-number">&nbsp; Shubh Chaurasia &nbsp;&nbsp;:&nbsp;&nbsp;+91 7348009857</div>
                    </div>
                </div>
                <div className="social-media">
                <motion.a whileHover={{scale : 1.1}} href="https://m.facebook.com/odyssey.kiet/" class="fa fa-facebook"></motion.a>
                <motion.a whileHover={{scale : 1.1}} href="https://instagram.com/odysseyliterarysociety?igshid=YmMyMTA2M2Y=" class="fa fa-instagram"></motion.a>
                <motion.a whileHover={{scale : 1.1}} href="https://www.linkedin.com/company/odyssey-literary-society-of-kiet/" class="fa fa-linkedin"></motion.a>
                <motion.a whileHover={{scale : 1.1}} href="https://twitter.com/odyssey_kiet" class="fa fa-twitter"></motion.a>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;