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
        // Reset all navlink and dot colors
        document.querySelectorAll('#page-titles > li').forEach(title => title.style.color = '#2d3142')
        document.querySelectorAll('.nav-dots > div').forEach(dot => dot.style.backgroundColor = 'white')
        // Change first dot color
        document.querySelector('.nav-dots > div:nth-child(1)').style.backgroundColor = '#ef8254'
      } else if (window.scrollY >= about.offsetTop - 300 && window.scrollY < projects.offsetTop - 300) {
        // Reset all navlink and dot colors
        document.querySelectorAll('#page-titles > li').forEach(title => title.style.color = '#2d3142')
        document.querySelectorAll('.nav-dots > div').forEach(dot => dot.style.backgroundColor = 'white')
        // Change 'About' navlink and second dot color
        document.getElementById('about-title').style.color = '#ef8254'
        document.querySelector('.nav-dots > div:nth-child(2)').style.backgroundColor = '#ef8254'
      } else if (window.scrollY >= projects.offsetTop - 300 && window.scrollY < contact.offsetTop - 300) {
        // Reset all navlink and dot colors
        document.querySelectorAll('#page-titles > li').forEach(title => title.style.color = '#2d3142')
        document.querySelectorAll('.nav-dots > div').forEach(dot => dot.style.backgroundColor = 'white')
        // Change 'Projects' navlink and third dot color
        document.querySelector('.nav-dots > div:nth-child(3)').style.backgroundColor = '#ef8254'
        document.getElementById('projects-title').style.color = '#ef8254'
      } else if (window.scrollY >= contact.offsetTop - 300) {
        // Reset all navlink and dot colors
        document.querySelectorAll('#page-titles > li').forEach(title => title.style.color = '#2d3142')
        document.querySelectorAll('.nav-dots > div').forEach(dot => dot.style.backgroundColor = 'white')
        // Change 'Contact' navlink and fourth dot color
        document.querySelector('.nav-dots > div:nth-child(4)').style.backgroundColor = '#ef8254'
        document.getElementById('contact-title').style.color = '#ef8254'
      }
    })
  }

  setPage = (num) => {
    document.querySelectorAll('.nav-dots > div').forEach(dot => dot.style.backgroundColor = 'white')
    document.querySelector(`.nav-dots > div:nth-child(${num})`).style.backgroundColor = '#ef8254'
    if (num == 1) {
      window.scrollTo(0, 0)
    } else {
      this.ref[num].scrollIntoView()
    }
  }

  render() {
    return (
      <div className="App">
        <div className="nav-dots">
          <div onClick={() => this.setPage(1)}></div>
          <div onClick={() => this.setPage(2)}></div>
          <div onClick={() => this.setPage(3)}></div>
          <div onClick={() => this.setPage(4)}></div>
        </div>
        <input type="checkbox" id="toggle"/>
        <div className="nav-menu">
          <div id="burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul id="page-titles">
            <li id="about-title" onClick={() => this.setPage(2)}>ABOUT</li>
            <li id="projects-title" onClick={() => this.setPage(3)}>PROJECTS</li>
            <li id="contact-title" onClick={() => this.setPage(4)}>CONTACT</li>
          </ul>
        </div>
        <Home ref={(ref) => { this.ref[1] = ref }} />
        <About ref={(ref) => { this.ref[2] = ref }} />
        <Projects ref={(ref) => { this.ref[3] = ref }} />
        <Contact ref={(ref) => { this.ref[4] = ref }} />
      </div>
    )
  }
}

export default App
