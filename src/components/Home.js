import React, { forwardRef } from 'react'

const Home = forwardRef((props, ref) => {
  return (
    <div className="home" ref={ref}>
      <div className="page-content">
        <h1 style={{marginBottom: 0}}>RICHARD HAN</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
    </div>
  )
})

export default Home
