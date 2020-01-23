import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

class App extends Component {

  constructor() {
    super()
    this.ref = []
    window.addEventListener("scroll", function() {
      const about = document.querySelector('.about')
      const projects = document.querySelector('.projects')
      const contact = document.querySelector('.contact')
      if (window.scrollY < about.offsetTop) {
        document.querySelectorAll('.page-titles p').forEach(title => title.style.color = 'white')
      } else if (window.scrollY >= about.offsetTop && window.scrollY < projects.offsetTop) {
        document.querySelectorAll('.page-titles p').forEach(title => title.style.color = 'white')
        document.getElementById('about-title').style.color = '#ef8254'
      } else if (window.scrollY >= projects.offsetTop && window.scrollY < contact.offsetTop) {
        document.querySelectorAll('.page-titles p').forEach(title => title.style.color = 'white')
        document.getElementById('projects-title').style.color = '#ef8254'
      } else if (window.scrollY >= contact.offsetTop) {
        document.querySelectorAll('.page-titles p').forEach(title => title.style.color = 'white')
        document.getElementById('contact-title').style.color = '#ef8254'
      }
    })
  }

  setPage = (num) => {
    // Scroll to page
    this.ref[num].scrollIntoView({ behavior: 'smooth' })

    // Changes title colors
    // document.querySelectorAll('.page-titles p').forEach(title => title.style.color = 'white')
    // switch(num) {
    //   case 0:
    //     break;
    //   case 1:
    //     document.getElementById('about-title').style.color = '#ef8254';
    //     break;
    //   case 2:
    //     document.getElementById('projects-title').style.color = '#ef8254';
    //     break;
    //   case 3:
    //     document.getElementById('contact-title').style.color = '#ef8254';
    //     break;
    // }
  }

  render() {
    return (
      <div className="App">
        <div className="nav-dots">
          <div onClick={() => this.setPage(0)}></div>
          <div onClick={() => this.setPage(1)}></div>
          <div onClick={() => this.setPage(2)}></div>
          <div onClick={() => this.setPage(3)}></div>
        </div>
        <div className="page-titles">
          <p id="about-title" onClick={() => this.setPage(1)}>ABOUT</p>
          <p id="projects-title" onClick={() => this.setPage(2)}>PROJECTS</p>
          <p id="contact-title" onClick={() => this.setPage(3)}>CONTACT</p>
        </div>
        <Home ref={(ref) => { this.ref[0] = ref }} />
        <About ref={(ref) => { this.ref[1] = ref }} />
        <Projects ref={(ref) => { this.ref[2] = ref }} />
        <Contact ref={(ref) => { this.ref[3] = ref }} />
      </div>
    )
  }
}

export default App
