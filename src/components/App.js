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
      const home = document.querySelector('.home > .page-content')
      const about = document.querySelector('.about')
      const projects = document.querySelector('.projects')
      const contact = document.querySelector('.contact')

      // Change opacity of home page while scrolling
      // Keep home page showing but start fading after a third of way to about page
      if (window.scrollY >= (about.offsetTop / 3)) {
        if (window.scrollY >= about.offsetTop) {
          home.style.opacity = 0
        } else {
          home.style.opacity = 1 - ((window.scrollY - (about.offsetTop / 3)) / (about.offsetTop + (about.offsetTop / 3)))
        }
      } else {
        home.style.opacity = 1
      }

      // Listen to change navlink/dot color based on scroll position
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
    // If hamburger menu showing, make sure nav links fade in
    if (window.innerWidth < 650) {
      document.querySelectorAll('#page-titles > li').forEach(link => link.classList.add('fade-in'))
    }
  }

  componentDidMount() {
    // Set first dot color
    document.querySelector('.nav-dots > div:nth-child(1)').style.backgroundColor = '#ef8254'

    // Make sure animations don't play on window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 650) {
        // Stop any animations and transitions on nav links
        document.querySelectorAll('#page-titles > li').forEach(link => link.classList.add('animation-stop'))
        // Uncheck the burger menu so it does not reopen when resized below 650px again
        if (document.getElementById('toggle').checked == true) document.getElementById('toggle').checked = false
      } else {
        // If resized below 650 again
          // If hamburger menu opened, make nav links fade in (and allow animations)
        if (document.getElementById('toggle').checked == true) {
          document.querySelectorAll('#page-titles > li')
            .forEach(link => {
              link.classList.remove('animation-stop', 'fade-out')
              link.classList.add('fade-in')
            })
        }
      }
    })

    // If hamburger menu opened, make nav links fade in (and allow animations)
    // Else, make nav links fade out
    document.getElementById('toggle').addEventListener('click', () => {
      if (document.getElementById('toggle').checked == true) {
        document.querySelectorAll('#page-titles > li').forEach(link => {
          link.classList.add('fade-in')
          link.classList.remove('fade-out', 'animation-stop')
        })
      } else {
        document.querySelectorAll('#page-titles > li').forEach(link => {
          link.classList.add('fade-out')
          link.classList.remove('fade-in')
        })
      }
    })
  }

  setPage = num => {
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
