import React from 'react';
import './Skills.css';

const skillsData = [
  {
    title: 'Frontend Development using HTML, CSS, JavaScript, and ReactJS',
    description: 'Experienced in creating responsive and interactive web applications.',
  },
  {
    title: 'Object-Oriented Programming (OOP) using Java',
    description: 'Strong understanding of OOP principles such as encapsulation, inheritance, polymorphism, and abstraction.',
  },
  {
    title: 'Data Structures and Algorithms (DSA) using C++',
    description: 'Proficient in fundamental data structures and algorithms. Capable of solving complex problems with optimized code solutions.',
  },
  {
    title: 'Database Management Systems (DBMS)',
    description: 'Skilled in SQL queries, database design, and management.',
  },
  {
    title: 'Programming Languages',
    description: 'Python, Java, C++, HTML, JavaScript, SQL.',
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1>My Skill Set</h1>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className={`skill-card ${index === 0 ? 'highlighted' : ''}`}>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
