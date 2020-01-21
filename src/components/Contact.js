import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact" ref={ref}>
      <h1>Contact</h1>
    </div>
  )
})

export default Contact
