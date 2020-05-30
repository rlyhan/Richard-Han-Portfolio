import React, { forwardRef } from 'react'
import resume from '../Richard_Han_CV.pdf'

const About = forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref}>
      <div className="page-content">
        <div className="bio">
          <h1>
            <strong>ABOUT ME</strong>
          </h1>
          <hr></hr>
          <p>
            I have been coding since 2015, and eventually found a passion for web
            development. I love building web-based products with modern designs
            and technologies, a satisfying user experience, and strong ambitions.
            I'm a positive collaborator and an independent hard worker.&nbsp;
            <a href={resume} download className="resume-link" target="_blank">
              Check out my resumé to find out more.
            </a>
          </p>
        </div>
        <div className="qualification">
          <div className="skills">
            <h4>MY SKILLSET INCLUDES...</h4>
            <br></br>
            <div className="tech-logos">
              <img src={require('../images/javascript.png')} alt="tech-logo" />
              <img src={require('../images/html.png')} alt="tech-logo" />
              <img src={require('../images/css.png')} alt="tech-logo" />
              <img src={require('../images/java.png')} alt="tech-logo" />
              <img src={require('../images/python.png')} alt="tech-logo" />
            </div>
            <div className="tech-logos">
              <img src={require('../images/nodejs.png')} alt="tech-logo" />
              <img src={require('../images/mongodb.png')} alt="tech-logo" />
              <img src={require('../images/react.png')} alt="tech-logo" />
              <img src={require('../images/redux.png')} alt="tech-logo" />
              <img src={require('../images/bootstrap.png')} alt="tech-logo" />
            </div>
          </div>
          <div className="education">
            <h4>ENSPIRAL DEV ACADEMY GRADUATE</h4>
            <hr></hr>
            <ul>
              <li>Web development bootcamp (graduated 2019)</li>
              <li>Refined my technical skills</li>
              <li>Gained strong ability to work and communicate in teams to
              efficiently deliver projects</li>
            </ul>
            <h4>TREEHOUSE FULL STACK JAVASCRIPT TECHDEGREE</h4>
            <hr></hr>
            <ul>
              <li>Online curriculum teaching full stack web development with JavaScript</li>
              <li>12 projects completed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})

export default About
