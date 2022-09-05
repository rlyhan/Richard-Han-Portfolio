import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
  // parallax scroll giant text on bottom left eg. "Let's Talk"
  // ie. scrolls out from under page on left slower than scroll speed
  return (
    <div className="contact" ref={ref}>
      <div className="page-content">
        <h2>GET IN TOUCH</h2>
        <hr></hr>
        <div>
          <div className="contact-icons">
            <a href="https://github.com/rlyhan" target="_blank">
              <img src={require('../images/github.png')} alt="github" style={{width: "calc(100% - 8px)"}} />
            </a>
            <a href="https://www.linkedin.com/in/richard-ly-han/" target="_blank">
              <img src={require('../images/linkedin.svg')} alt="linkedin" />
            </a>
          </div>
          <div className="contact-details">
            <h3>EMAIL: <a href="mailto:richard.ly.han@gmail.com">richard.ly.han@gmail.com</a></h3>
            <h3>PHONE: <a href="tel:+642102518876">+64 21 025 18876</a></h3>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Contact
