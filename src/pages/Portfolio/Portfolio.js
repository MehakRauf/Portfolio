import React from 'react';
import './Portfolio.css';
import calculatorImage from '../../assets/calculator.JPG'
import foodApp from '../../assets/foodapp.JPG'
import geminiClone from '../../assets/geminiclone.JPG'
import newsApp from '../../assets/newsapp.JPG'
import quizApp from '../../assets/quizapp.JPG'
import weatherApp from '../../assets/weatherapp.JPG'
import todoApp from '../../assets/todoapp.JPG'
import notesapp from '../../assets/notesapp.JPG'
import firebase from '../../assets/firebase.JPG'
import edusity from '../../assets/edusity.JPG'
import reduxTodo from '../../assets/reduxtodo.JPG'

const projects = [
  {
    title: 'Calculator App',
    image: calculatorImage,
    codeLink: 'https://github.com/MehakRauf/CalculatorReact',
    demoLink: 'https://calculatorbyfatima.netlify.app/',
  },
  {
    title: 'Weather App',
    image: weatherApp,
    codeLink: 'https://github.com/MehakRauf/WeatherAppReactJS',
    demoLink: 'https://weather-app-reactjsproject.netlify.app/',
  },
  {
    title: 'Notes App',
    image: notesapp,
    codeLink: 'https://github.com/MehakRauf/NotesApp',
    demoLink: 'https://noteappbymehak.netlify.app/',
  },
  {
    title: 'Food Delivery App',
    image: foodApp,
    codeLink: 'https://github.com/MehakRauf/FoodDeliveryApp',
    demoLink: 'https://reactjs-food-delivery-app.netlify.app/',
  },
  {
    title: 'Gemini Clone',
    image: geminiClone,
    codeLink: 'https://github.com/MehakRauf/GeminiClone',
    demoLink: 'https://geminiclonebymehak.netlify.app/',
  },
  {
    title: 'News App',
    image: newsApp,
    codeLink: 'https://github.com/MehakRauf/News_App',
    demoLink: 'https://rapidnewsapp.netlify.app/',
  },
  {
    title: 'Quiz App',
    image: quizApp,
    codeLink: 'https://github.com/MehakRauf/QuizApp',
    demoLink: 'https://quiz-app-reactjsproject.netlify.app/',
  },
  {
    title: 'ToDo App',
    image: todoApp,
    codeLink: 'https://github.com/MehakRauf/ToDoApp',
    demoLink: 'http://localhost:3000',
  },
  {
    title: 'Firebase Authentication Application',
    image: firebase,
    codeLink: 'https://github.com/MehakRauf/FirebaseApplication',
    demoLink: 'https://firebaseauthenticationusingreactjs.netlify.app/',
  },
  {
    title: 'Edusity University Application',
    image: edusity,
    codeLink: 'https://github.com/MehakRauf/Edusity',
    demoLink: 'https://edusityusingreactjs.netlify.app/',
  },
  {
    title: 'Redux ToDo Application',
    image: reduxTodo,
    codeLink: 'https://github.com/MehakRauf/ReduxTodo',
    demoLink: 'https://reduxtodoapplication.netlify.app/',
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h1>Projects</h1>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <h2 className="portfolio-title">{project.title}</h2>
            <div className="portfolio-links">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-code">View Code</a>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-demo">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
