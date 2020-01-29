import React, { forwardRef } from 'react'

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
          I'm a full stack web developer. I work mainly with JavaScript/HTML/CSS,
          along with technologies like React, Redux and Mongo.
        </p>
        <p>
          I love building projects with modern designs and technologies and a
          satisfying user experience. I'm both a positive collaborator and an
          independent hard worker.
        </p>
        <p className="resume-link">
          Check out my resume.
        </p>
        <br></br>
        <hr></hr>
      </div>
    </div>
  )
})

export default About
