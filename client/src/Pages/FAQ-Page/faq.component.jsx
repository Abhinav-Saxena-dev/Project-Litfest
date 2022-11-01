import React from "react";
import Accordion from "../../Components/Accordion/accordion.component";
import accordionData from './../../assets/faq_content'
import HeadingWithDash from './../../Components/Headingwdash/headingwdash.component'

import './faq.style.scss';

const FaqPage = () => {

    return(
        <div className="faq-page" id = {"faq's"}>
            <div className="faq-page-heading">
                <HeadingWithDash text = {`Frequently Asked Questions`} />
            </div>
            <div className="accordian-container">
            <div className="accordion">
            {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
            </div>
            </div>
        </div>
    );
}

export default FaqPage;