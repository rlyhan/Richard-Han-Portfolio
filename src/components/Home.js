import React, { forwardRef } from 'react'

const Home = forwardRef((props, ref) => {
  return (
    <div className="home" ref={ref}>
      <h1>RICHARD HAN</h1>
      <h3>Full Stack Web Developer</h3>
    </div>
  )
})

export default Home
