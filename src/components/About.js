import React, { forwardRef, useState, useEffect } from 'react'

const About = forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref}>
      <div className="page-content">
        <div className="top-text-container">
          <div className="top-section-wrap">
            <div className="main-text">
              <span className="coloured">Richard</span> is a contract full stack web developer
              currently based in Wellington, New Zealand.
            </div>
            <div className='map-container'>
              <div className='map'></div>
              <div id='pinpoint-animation'></div>
            </div>
          </div>
          <div className="body-text">
            From online stores and architectural portfolios to art galleries and
            tourism, Richard has built numerous digital applications for a diverse
            range of clients.<br/><br/>
            In collaboration with <a href='https://bestawards.co.nz/studios/sons-co/' target="_blank">Sons & Co,</a> he
            has built websites for clients such as Deadly Ponies, Coloursmith, and <a href="https://bestawards.co.nz/digital/large-scale-websites/sons-co/neat-places-1/" target="_blank">
            Neat Places (see on Best Awards)</a> with a strong focus on visual aesthetic and customised interfaces.<br/><br/>
            He is currently contracting for <a href='https://voyage.studio/' target="_blank">Voyage.</a>
          </div>
        </div>
        <div className="decorative"></div>
        <div className="bottom-text-container">
          <div className="body-text">
            <ul className="project-attributes">
              <li><span className="coloured">Tailored</span> to the best of the client's needs</li>
              <li><span className="coloured">Fully responsive</span> and utilise <span className="coloured">modern frameworks</span></li>
              <li><span className="coloured">Bespoke</span> interfaces and content management systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})

export default About
