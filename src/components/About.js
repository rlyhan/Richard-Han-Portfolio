import React, { forwardRef, useState, useEffect } from 'react'
import resume from '../Richard_Han_CV.pdf'

const About = forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref}>
      <div className="page-content">
        <div className="top-text-container">
          <div className="top-section-wrap">
            <div className="main-text">
              <span className="coloured">Richard</span> is a contract full stack web developer
              currently based in Christchurch, New Zealand.
            </div>
            <div className='map-container'>
              <div className='map'></div>
              <div id='pinpoint-animation'></div>
            </div>
          </div>
          <div className="body-text">
            From online stores and architectural portfolios to art galleries and
            tourism, he has built numerous digital applications for a diverse
            range of clients.<br/><br/>
            One of his first projects was PlantMe, an eCommerce platform with
            an environmental focus - trading produce and gardening goods, as
            well as plant growing guides.<br/><br/>
            Since 2020, he has worked with Sons & Co and built websites for
            clients such as Deadly Ponies, Neat Places, and James Dunlop, with
            a strong focus on visual aesthetic and customised interfaces.
          </div>
        </div>
        <div className="decorative"></div>
        <div className="bottom-text-container">
          <div className="body-text">
            <ul className="project-attributes">
              <li><span className="coloured">Tailored</span> to the best of the client's needs</li>
              <li><span className="coloured">Fully responsive</span> and utilise <span className="coloured">modern frameworks</span></li>
              <li><span className="coloured">Fully customisable </span>content management systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})

export default About
