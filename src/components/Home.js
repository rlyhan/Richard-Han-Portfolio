import React, { forwardRef } from 'react'

const Home = forwardRef((props, ref) => {
  return (
    <div className="home" ref={ref}>
      <div className="page-content">
        <div className="title">
          <h1 style={{marginBottom: 0}}>RICHARD HAN</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <div className="circles">
          <div className="ring">
            <div className="dot"></div>
          </div>
          <div className="ring">
            <div className="dot"></div>
          </div>
          <div className="ring">
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Home
