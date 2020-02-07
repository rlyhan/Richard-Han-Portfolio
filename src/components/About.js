import React, { forwardRef } from 'react'
import resume from '../Richard_Han_CV.pdf'

const About = forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref}>
      <div className="page-content">
        <h1>
          <strong>HI, I'M RICHARD!</strong>
        </h1>
        <hr></hr>
        <br></br>
        <p>
          I have been coding since 2015, but later on I found a passion for web
          development which I first started learning through Treehouse, where I
          earned the Full Stack JavaScript Techdegree.
        </p>
        <p>
          In 2019, I attended Enspiral Dev Academy, a web development bootcamp.
          There, I refined my established web development technical skills and
          gained a strong ability to work and communicate in teams in order to
          deliver projects efficiently.
        </p>
        <p>
          I love building projects with modern designs and technologies, a
          satisfying user experience, and strong ambitions. I'm both a positive
          collaborator and an independent hard worker.
        </p>
        <br></br>
        <p>Some of the languages and technologies in my skillset...</p>
        <br></br>
        <div className="tech-logos">
          <img src={require('../images/javascript.png')} />
          <img src={require('../images/html.png')} />
          <img src={require('../images/css.png')} />
          <img src={require('../images/java.png')} />
          <img src={require('../images/python.png')} />
        </div>
        <div className="tech-logos">
          <img src={require('../images/nodejs.png')} />
          <img src={require('../images/mongodb.png')} />
          <img src={require('../images/react.png')} />
          <img src={require('../images/redux.png')} />
          <img src={require('../images/bootstrap.png')} />
        </div>
        <br></br>
        <p>
          <a href={resume} download className="resume-link" target="_blank">
            Check out my resumé to find out more.
          </a>
        </p>
        <br></br>
        <hr></hr>
      </div>
    </div>
  )
})

export default About
