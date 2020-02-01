import React, { forwardRef } from 'react'

// make message 'Click to visit site' appear on images?

const Projects = forwardRef((props, ref) => {
  return (
    <div className="projects" ref={ref}>
      <div className="page-content">
        <div className="project">
          <div className="image">
            <a href="https://explore-welly.herokuapp.com/" target="_blank">
              <p>CLICK TO VISIT</p>
              <img src={require('../images/wellington-day.jpg')} />
            </a>
          </div>
          <h2><strong>WELLY</strong></h2>
          <p className="description">
            Personal project. Site used to browse through shops, restaurants,
            bars and more in the city of Wellington, New Zealand. Uses
            information from Yelp.
          </p>
        </div>
        <div className="project">
          <div className="image">
            <a href="https://foraged-and-found.herokuapp.com/" target="_blank">
              <p>CLICK TO VISIT</p>
              <img src={require('../images/foraging.jpg')} style={{background: "#D25E5D"}} />
            </a>
          </div>
          <h2><strong>FORAGED AND FOUND</strong></h2>
          <p className="description">
            Final group project at Enspiral Dev Academy. An application for the
            foraging community, allowing them to easily locate foragable items
            (like fruits and herbs) on a Google Map. Can add items on map for
            others to find or for their own reference.
          </p>
        </div>
      </div>
    </div>
  )
})

export default Projects
