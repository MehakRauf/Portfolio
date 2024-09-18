import React from 'react';
import './Portfolio.css';
import calculatorImage from '../../assets/calculator.JPG'
import foodApp from '../../assets/foodapp.JPG'
import geminiClone from '../../assets/geminiclone.JPG'
import newsApp from '../../assets/newsapp.JPG'
import quizApp from '../../assets/quizapp.JPG'
import weatherApp from '../../assets/weatherapp.JPG'
import todoApp from '../../assets/todoapp.JPG'

const projects = [
  {
    title: 'Calculator App',
    image: calculatorImage,
    codeLink: 'https://github.com/your-repo/calculator-app',
    demoLink: 'https://your-live-demo-link.com/calculator-app',
  },
  {
    title: 'Weather App',
    image: weatherApp,
    codeLink: 'https://github.com/your-repo/calculator-app',
    demoLink: 'https://your-live-demo-link.com/calculator-app',
  },
  {
    title: 'ToDo App',
    image: todoApp,
    codeLink: 'https://github.com/your-repo/calculator-app',
    demoLink: 'https://your-live-demo-link.com/calculator-app',
  },
  {
    title: 'Food Delivery App',
    image: foodApp,
    codeLink: 'https://github.com/your-repo/calculator-app',
    demoLink: 'https://your-live-demo-link.com/calculator-app',
  },
  {
    title: 'Gemini Clone',
    image: geminiClone,
    codeLink: 'https://github.com/your-repo/calculator-app',
    demoLink: 'https://your-live-demo-link.com/calculator-app',
  },
  {
    title: 'News App',
    image: newsApp,
    codeLink: 'https://github.com/your-repo/calculator-app',
    demoLink: 'https://your-live-demo-link.com/calculator-app',
  },
  {
    title: 'Quiz App',
    image: quizApp,
    codeLink: 'https://github.com/your-repo/calculator-app',
    demoLink: 'https://your-live-demo-link.com/calculator-app',
  },
 
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h1>My Portfolio</h1>
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
