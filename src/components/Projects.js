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
              <img src={require('../images/projects/covid19.PNG')} alt="project-thumb"/>
            </div>
            <div className="project-title">
              <p>COVID-19 DATA - NEW ZEALAND</p>
              <div className="links">
                <span><a href="https://covid19-data-nz.herokuapp.com/" target="_blank">VIEW SITE</a></span>
                <span><a href="https://github.com/rlyhan/COVID19-Data-NZ" target="_blank">GITHUB</a></span>
              </div>
            </div>
            <div className="project-description">
              <p>Data visualiser for the COVID-19 pandemic in New Zealand.</p>
              <p>Interactive map showing data for each district health board. Graph of case growth.</p>
              <p>React | REST API</p>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img src={require('../images/projects/foraged.PNG')} style={{background: "#D25E5D"}} alt="project-thumb"/>
            </div>
            <div className="project-title">
              <p>FORAGED AND FOUND</p>
              <div className="links">
                <span><a href="https://foraged-and-found.herokuapp.com/" target="_blank">VIEW SITE</a></span>
                <span><a href="https://github.com/rlyhan/Foraged-And-Found" target="_blank">GITHUB</a></span>
              </div>
            </div>
            <div className="project-description">
              <p>An app aimed towards the foraging community.</p>
              <p>Locate foragable items (like fruits and herbs) on a Google Map. Add items to map (can set either private for own reference, or public to share with others)</p>
              <p>React | Redux | REST API | SQLite</p>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img src={require('../images/projects/welly.PNG')} alt="project-thumb" />
            </div>
            <div className="project-title">
              <p>WELLY</p>
              <div className="links">
                <span><a href="https://explore-welly.herokuapp.com/" target="_blank">VIEW SITE</a></span>
                <span><a href="https://github.com/rlyhan/Welly-Site" target="_blank">GITHUB</a></span>
              </div>
            </div>
            <div className="project-description">
              <p>Browse through shops, restaurants,
              bars and more in the city of Wellington, New Zealand.</p>
              <p>Uses information from Yelp.</p>
              <p>React | Redux | REST API | MongoDB</p>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img src={require('../images/projects/tictactoe.PNG')} style={{background: "#D25E5D"}} alt="project-thumb"/>
            </div>
            <div className="project-title">
              <p>TIC TAC TOE</p>
              <div className="links">
                <span><a href="https://rlyhan.github.io/Tic-Tac-Toe/" target="_blank">VIEW SITE</a></span>
                <span><a href="https://github.com/rlyhan/Tic-Tac-Toe" target="_blank">GITHUB</a></span>
              </div>
            </div>
            <div className="project-description">
              <p>Play against a programmed opponent.</p>
              <p>HTML/CSS/JS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Projects
