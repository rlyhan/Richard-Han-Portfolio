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
      if (window.scrollY < about.offsetTop - 300) {
        document.querySelectorAll('#page-titles > li').forEach(title => title.style.color = '#2d3142')
      } else if (window.scrollY >= about.offsetTop - 300 && window.scrollY < projects.offsetTop - 300) {
        document.querySelectorAll('#page-titles > li').forEach(title => title.style.color = '#2d3142')
        document.getElementById('about-title').style.color = '#ef8254'
      } else if (window.scrollY >= projects.offsetTop - 300 && window.scrollY < contact.offsetTop - 300) {
        document.querySelectorAll('#page-titles > li').forEach(title => title.style.color = '#2d3142')
        document.getElementById('projects-title').style.color = '#ef8254'
      } else if (window.scrollY >= contact.offsetTop - 300) {
        document.querySelectorAll('#page-titles > li').forEach(title => title.style.color = '#2d3142')
        document.getElementById('contact-title').style.color = '#ef8254'
      }
    })
  }

  setPage = (num) => {
    if (num == 0) {
      window.scrollTo(0, 0)
    } else {
      this.ref[num].scrollIntoView()
    }
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
        <div className="nav-menu">
          <div id="burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <input type="checkbox" id="toggle"/>
          <ul id="page-titles">
            <li id="about-title" onClick={() => this.setPage(1)}>ABOUT</li>
            <li id="projects-title" onClick={() => this.setPage(2)}>PROJECTS</li>
            <li id="contact-title" onClick={() => this.setPage(3)}>CONTACT</li>
          </ul>
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
