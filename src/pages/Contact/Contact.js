import React from 'react';
import './Contact.css'; 
import linkedIcon from "../../assets/linkedin-icon-2-logo-svgrepo-com.svg";
import githubIcon from "../../assets/logo-github-svgrepo-com.svg";
import emailIcon from "../../assets/email-1573-svgrepo-com.svg";


function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h1>Contact Details</h1>
      <p>If you’d like to get in touch, feel free to reach out via any of the following platforms:</p>
      <div className="contact-info">
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/mehak-fatima-08a568275/" >
            <img src={linkedIcon} alt="LinkedIn" className="contact-icon" />
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <a href="https://github.com/MehakRauf" >
            <img src={githubIcon} alt="GitHub" className="contact-icon" />
            GitHub
          </a>
        </div>
        <div className="contact-item">
            <img src={emailIcon} alt="Email" className="contact-icon" />
             mehak.fatima2386@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Contact;
