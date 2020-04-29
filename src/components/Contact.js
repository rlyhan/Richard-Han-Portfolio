import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact" ref={ref}>
      <div className="page-content">
        <h1>GET IN TOUCH</h1>
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
            <h2>EMAIL: <a href="mailto:richard.ly.han@gmail.com">richard.ly.han@gmail.com</a></h2>
            <h2>PHONE: <a href="tel:+642102518876">+64 21 025 18876</a></h2>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Contact
