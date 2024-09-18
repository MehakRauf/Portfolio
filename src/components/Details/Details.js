import React from 'react';
import './Details.css';
import profilePic from './profilepic.png'; 

const Details = () => {
  return (
    <section id="home" className='container'>
      <div className="container1">
        <div className="intro">
          <h1>Hi, I'm Mehak Fatima</h1>
          <br/>
          <p>A passionate Frontend Web Developer with a knack for creating beautiful and functional websites using ReactJS.</p>
        </div>
        <br/>
        <div className="call-to-action">
          <a href="#portfolio" className="btn">MY PROJECTS</a>
          <a href="#contact" className="btn">GET IN TOUCH</a>
        </div>
      </div>
      <div className="container2">
        <img src={profilePic} alt="Profile Picture" className="profile-picture" />
      </div>
    </section>
  );
}

export default Details;
