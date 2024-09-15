import React from 'react';
import './Home.css';
import profilePic from './profilepic.png'; 

const Home = () => {
  return (
    <section id="home" className='container'>
      <div className="container1">
        <div className="intro">
          <h1>Hi, I'm Mehak Fatima</h1>
          <p>A passionate Web Developer with a knack for creating beautiful and functional websites.</p>
        </div>
        <div className="professional-summary">
          <h2>About Me</h2>
          <p>I have over 2 years of experience in front-end development, specializing in React and JavaScript.</p>
          <p> My work focuses on delivering high-quality user experiences and solving complex problems through innovative solutions.</p>
        </div>
        <div className="call-to-action">
          <a href="#portfolio" className="btn">Explore My Work</a>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </div>
      <div className="container2">
        <img src={profilePic} alt="Profile Picture" className="profile-picture" />
      </div>
    </section>
  );
}

export default Home;
