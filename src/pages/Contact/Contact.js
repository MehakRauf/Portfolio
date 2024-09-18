// src/pages/Contact/Contact.js

import React from 'react';
import './Contact.css'; // Import the CSS file for styling

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h1>Contact Me</h1>
      <p>If you’d like to get in touch, feel free to reach out via the following platforms:</p>
      <div className="contact-info">
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="contact-icon" />
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="contact-icon" />
            GitHub
          </a>
        </div>
        <div className="contact-item">
          <a href="mailto:your-email@example.com">
            <img src="/icons/email.svg" alt="Email" className="contact-icon" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
