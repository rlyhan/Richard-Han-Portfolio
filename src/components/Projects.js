import React, { forwardRef } from 'react'

const Projects = forwardRef((props, ref) => {
  return (
    <div className="projects" ref={ref}>
      <div className="page-content">
        <div className="project">
          <a href="https://explore-welly.herokuapp.com/" target="_blank">
            <img src={require('../images/wellington-day.jpg')} />
          </a>
          <h2><strong>WELLY.</strong></h2>
          <p>
            Personal project. Site used to browse through shops, restaurants,
            bars and more in the city of Wellington, New Zealand.
          </p>
        </div>
        <div className="project">
          <a href="https://foraged-and-found.herokuapp.com/" target="_blank">
            <img src={require('../images/wellington-day.jpg')} />
          </a>
          <h2><strong>FORAGED AND FOUND</strong></h2>
          <p>
            Final group project at Enspiral Dev Academy. An application for the
            foraging community, allowing them to easily locate foragable items
            (like fruits and herbs) on a Google Map and also add items for others
            to find or for their own reference.
          </p>
        </div>
      </div>
    </div>
  )
})

export default Projects
