import React, { forwardRef } from 'react'

const About = forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref}>
      <h1>About</h1>
    </div>
  )
})

export default About
