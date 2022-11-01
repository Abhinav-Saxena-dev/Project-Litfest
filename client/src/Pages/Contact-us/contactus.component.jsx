import React from "react";

import HeadingWithDash from './../../Components/Headingwdash/headingwdash.component';

import {motion} from 'framer-motion';

import odyssey from './../../assets/Odyssey_logo.png';
import {ReactComponent as Logo} from './../../assets/call_FILL1_wght700_GRAD200_opsz48.svg'

import './contactus.style.scss';

const ContactUs = () => {
    return(
        <div className="contact-us-page" id = {'contact'}>
            {/* <div className="odyssey-page-heading">
                <HeadingWithDash text = {`CONTACT US`} />
            </div> */}
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
                        <div className="member-number">&nbsp; Vandana Arora &nbsp;&nbsp;:&nbsp;&nbsp;+91 7348445574</div>
                        <div className="member-number">&nbsp; Shubh Chaurasia &nbsp;&nbsp;:&nbsp;&nbsp;+91 7348445584</div>
                    </div>
                </div>
                <div className="social-media">
                <motion.a whileHover={{scale : 1.1}} href="#" class="fa fa-facebook"></motion.a>
                <motion.a whileHover={{scale : 1.1}} href="#" class="fa fa-instagram"></motion.a>
                <motion.a whileHover={{scale : 1.1}} href="#" class="fa fa-linkedin"></motion.a>
                <motion.a whileHover={{scale : 1.1}} href="#" class="fa fa-twitter"></motion.a>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;