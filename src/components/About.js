import React, { forwardRef } from 'react'

const About = forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref}>
      <div className="page-content">
        <h1>
          <strong>HI, I'M RICHARD!</strong>
        </h1>
        <p>
          I'm a full stack web developer, I work mainly with JavaScript, along
          with technologies like React, Redux and Mongo.
        </p>
        <p>
          My aim is to create products that innovate, satisfy, and ultimately
          make a difference in the way people interact digitally for the better.
        </p>
      </div>
    </div>
  )
})

export default About
