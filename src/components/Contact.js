import React, { forwardRef } from 'react'

const technologies = require('../content/technologies.json')

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
        <div className="bottom-text-container">
          <div className="technologies">
            {
              technologies.map((tech, index) => {
                return (
                  <span className="tech" key={index} style={{ background: tech["colour"] }}>
                    { tech["name"] }
                  </span>
                )
              })
            }
          </div>
          <div className="more-about">
            <p className="heading">A little more about me...</p>
            <p>I consider myself a creative, visual person and gravitate towards
               like-minded people and industries, which was a big factor in drawing
               me towards web development.<br/>
               I am passionate about music and love intimately listening to
               albums (particularly rock and folk), playing instruments or attending
               live gigs. I also enjoy a good outdoor adventure such as skiing or kayaking,
               as well as cooking and watching films and series.</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Contact
