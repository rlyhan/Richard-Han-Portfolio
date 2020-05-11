import React, { forwardRef } from 'react'

const Projects = forwardRef((props, ref) => {
  return (
    <div className="projects" ref={ref}>
      <div className="page-content">
        <h1>RECENT PROJECTS</h1>
        <hr></hr>
        <br></br>
        <div className="project-list">
          <div className="project">
            <div className="image">
              <img src={require('../images/projects/covid19.PNG')} />
            </div>
            <p className="project-link"><a href="https://covid19-data-nz.herokuapp.com/" target="_blank">COVID-19 DATA - NEW ZEALAND</a></p>
            <hr></hr>
            <ul className="project-description">
              <li>Data visualiser for the COVID-19 pandemic in New Zealand</li>
              <li>Interactive map and graph</li>
              <li>React, REST APIs</li>
            </ul>
          </div>
          <div className="project">
            <div className="image">
              <img src={require('../images/projects/foraged.PNG')} style={{background: "#D25E5D"}} />
            </div>
            <p className="project-link"><a href="https://foraged-and-found.herokuapp.com/" target="_blank">FORAGED AND FOUND</a></p>
            <hr></hr>
            <ul className="project-description">
              <li>An app aimed towards the foraging community</li>
              <li>Locate foragable items (like fruits and herbs) on a Google Map</li>
              <li>Add items to map (can set either private for own reference, or public to share with others)</li>
              <li>React, Redux, REST APIs, SQLite</li>
            </ul>
          </div>
          <div className="project">
            <div className="image">
              <img src={require('../images/projects/welly.PNG')} />
            </div>
            <p className="project-link"><a href="https://explore-welly.herokuapp.com/" target="_blank">WELLY</a></p>
            <hr></hr>
            <ul className="project-description">
              <li>Browse through shops, restaurants,
              bars and more in the city of Wellington, New Zealand</li>
              <li>Uses information from Yelp</li>
              <li>React, Redux, REST APIs, MongoDB</li>
            </ul>
          </div>
          <div className="project">
            <div className="image">
              <img src={require('../images/projects/tictactoe.PNG')} style={{background: "#D25E5D"}} />
            </div>
            <p className="project-link"><a href="https://rlyhan.github.io/Tic-Tac-Toe/" target="_blank">TIC TAC TOE</a></p>
            <hr></hr>
            <ul className="project-description">
              <li>Play against a programmed opponent</li>
              <li>HTML/CSS/JS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Projects
