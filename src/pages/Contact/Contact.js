import React from 'react';
import './Contact.css';
import linkedIcon from "../../assets/linkedin-icon-2-logo-svgrepo-com.svg";
import githubIcon from "../../assets/logo-github-svgrepo-com.svg";
import emailIcon from "../../assets/email-1573-svgrepo-com.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "59242487-2dfd-415a-8512-4dbbd020b4f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <h1 className='heading'>Reach Out Anytime!</h1>
      <div className="contact container" id='contact'>
        <div className="contact-cols">
          <h4>Feel Free to Get in Touch Through:</h4>
          <ul>
            <a href="https://www.linkedin.com/in/mehak-fatima-08a568275/">
              <li><img src={linkedIcon} alt="" />LinkedIn</li>
            </a>
            <a href="https://github.com/MehakRauf">
              <li><img src={githubIcon} alt="" />GitHub</li>
            </a>
            <li><img src={emailIcon} alt="" />mehak.fatima2386@gmail.com</li>
          </ul>
        </div>
        <div className="contact-cols">
          <form onSubmit={onSubmit}>
            <h3>Drop Me a Message!</h3>
            <label >Your name</label>
            <input type="text" name="name" placeholder='Enter your name' required />
            <label >Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label >Write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button type='submit' className='btn dark-btn'>Send Message</button>
          </form>
          <span>{result}</span>
        </div>

      </div>
    </>
  )
}

export default Contact