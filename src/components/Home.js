import React, { forwardRef } from 'react'

const Home = forwardRef((props, ref) => {
  return (
    <div className="home" ref={ref}>
      <div className="page-content">
        <div className='circle'></div>
        <div className='circle clone'></div>
        <div className="title-wrap">
          <div className="title">
            <h1>RICHARD HAN</h1>
          </div>
          <div className="subtitle">
            <p>DIGITAL CREATOR.</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Home
