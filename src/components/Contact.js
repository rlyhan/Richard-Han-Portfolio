import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
  // parallax scroll giant text on bottom left eg. "Let's Talk"
  // ie. scrolls out from under page on left slower than scroll speed
  return (
    <div className="contact" ref={ref}>
      <div className="page-content">
        <p className="contact-heading">Let's talk.</p>
        <p className="contact-detail">Email: <a href="mailto:richard.ly.han@gmail.com">richard.ly.han@gmail.com</a></p>
        <p className="contact-detail"><a href="https://www.linkedin.com/in/richard-ly-han/" target="_blank">LinkedIn.</a></p>
        <p className="contact-detail"><a href="https://github.com/rlyhan" target="_blank">GitHub.</a></p>
        <div className="more-about">
          <p className="heading">A little more about me...</p>
          <p>I am passionate about music and like to jam, write and attend live gigs,
              and enjoy a good outdoor adventure such as skiing or kayaking.</p>
        </div>
      </div>
    </div>
  )
})

export default Contact
