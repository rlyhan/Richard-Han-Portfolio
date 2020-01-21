import React, { forwardRef } from 'react'

const Home = forwardRef((props, ref) => {
  return (
    <div className="home" ref={ref}>
      <h1>Home</h1>
    </div>
  )
})

export default Home
