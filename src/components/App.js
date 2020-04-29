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
      const navMenu = document.querySelector('.nav-menu')
      const home = document.querySelector('.home')
      const about = document.querySelector('.about')
      const projects = document.querySelector('.projects')
      const contact = document.querySelector('.contact')

      // Change navbar position based on scroll position
      if (window.scrollY === 0) {
        // navMenu.style.top = "0"
        // Make nav menu appear at bottom of page at this position (if not already)
        if (!navMenu.classList.contains('nav-to-bottom')) navMenu.classList.add('nav-to-bottom')
        if (navMenu.classList.contains('nav-to-top')) navMenu.classList.remove('nav-to-top')
      } else if (window.scrollY > 0) {
        // navMenu.style.top = "-100px"
        // Make nav menu appear at bottom of page at this position (if not already)
        if (!navMenu.classList.contains('nav-to-top')) navMenu.classList.add('nav-to-top')
        if (navMenu.classList.contains('nav-to-bottom')) navMenu.classList.remove('nav-to-bottom')
      }
      // Listen to change navlink/dot color based on scroll position
      if (window.scrollY < about.offsetTop - 200) {
        /* HOME */
        // If scroll pos < about page pos - 300
        // Reset all navlink and dot colors
        document.querySelectorAll('#page-titles > li').forEach(title => title.style.color = '#2d3142')
        document.querySelectorAll('.nav-dots > div').forEach(dot => dot.style.backgroundColor = 'transparent')
        // Change first dot color
        document.querySelector('.nav-dots > div:nth-child(1)').style.backgroundColor = '#ef8254'
      } else if (window.scrollY >= about.offsetTop - 300 && window.scrollY < projects.offsetTop - 300) {
        /* NAV MENU */
        // Make nav menu appear at top of page at this position
        if (navMenu.classList.contains('nav-to-bottom')) navMenu.classList.remove('nav-to-bottom')
        if (!navMenu.classList.contains('nav-to-top')) navMenu.classList.add('nav-to-top')
        /* ABOUT */
        // If scroll pos >= about page pos - 300 and scrollPos < projects page pos - 300
        // Reset all navlink and dot colors
        document.querySelectorAll('#page-titles > li').forEach(title => title.style.color = '#2d3142')
        document.querySelectorAll('.nav-dots > div').forEach(dot => dot.style.backgroundColor = 'transparent')
        // Change 'About' navlink and second dot color
        document.getElementById('about-title').style.color = '#ef8254'
        document.querySelector('.nav-dots > div:nth-child(2)').style.backgroundColor = '#ef8254'
        // Make 'About' page expand
        // document.querySelector('.about').classList.add('expand')
      } else if (window.scrollY >= projects.offsetTop - 300 && window.scrollY < contact.offsetTop - 300) {
        /* PROJECTS */
        // If scroll pos >= projects page pos - 300 and scrollPos < contact page pos - 300
        // Reset all navlink and dot colors
        document.querySelectorAll('#page-titles > li').forEach(title => title.style.color = '#2d3142')
        document.querySelectorAll('.nav-dots > div').forEach(dot => dot.style.backgroundColor = 'transparent')
        // Change 'Projects' navlink and third dot color
        document.querySelector('.nav-dots > div:nth-child(3)').style.backgroundColor = '#ef8254'
        document.getElementById('projects-title').style.color = '#ef8254'
      } else if (window.scrollY >= contact.offsetTop - 300) {
        /* CONTACT */
        // If scroll pos >= contact page pos - 300
        // Reset all navlink and dot colors
        document.querySelectorAll('#page-titles > li').forEach(title => title.style.color = '#2d3142')
        document.querySelectorAll('.nav-dots > div').forEach(dot => dot.style.backgroundColor = 'transparent')
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
      if (document.getElementById('toggle').checked === true) {
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

    const home = document.querySelector('.home > .page-content')
    const about = document.querySelector('.about')
    home.style.display = 'block'
    let aboutTop = about.offsetTop - 180

    // Change opacity of home page while scrolling
    // Keep home page showing but start fading after a quarter of way to about page
    // Hide if past the about page
    window.addEventListener("scroll", () => {
      if (window.scrollY >= (aboutTop / 4)) {
        if (window.scrollY >= aboutTop) {
          home.style.opacity = 0
          home.style.display = 'none'
        } else {
          home.style.opacity = 1 - (((window.scrollY - (aboutTop / 4)) / (aboutTop + (aboutTop / 4)))*3.2)
          home.style.display = 'block'
        }
      } else {
        home.style.opacity = 1
      }
    })
  }

  setPage = pageNum => {
    // Reset nav dot colours, set colour on selected page's respective dot
    document.querySelectorAll('.nav-dots > div').forEach(dot => dot.style.backgroundColor = 'white')
    document.querySelector(`.nav-dots > div:nth-child(${pageNum})`).style.backgroundColor = '#ef8254'
    // Scroll to top of a page
    if (pageNum === 1) window.scrollTo(0, this.refs.home.offsetTop)
    else if (pageNum === 2) window.scrollTo(0, this.refs.about.offsetTop)
    else if (pageNum === 3) window.scrollTo(0, this.refs.projects.offsetTop)
    else if (pageNum === 4) window.scrollTo(0, this.refs.contact.offsetTop)
  }

  /* Helper functions to calculate distance */

  getHalfPoint = (page1, page2) => {
    // Returns the half way point between two pages
    return page1 + ((page2 - page1) / 2)
  }

  getDistanceOpacity = (origin, dest) => {
    // Returns opacity based on scroll position between= origin and destination points
    return ((window.scrollY - origin) / (dest - origin))
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
        <div className="nav-menu nav-to-bottom">
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
        <Home ref="home" />
        <About ref="about" />
        <Projects ref="projects" />
        <Contact ref="contact" />
      </div>
    )
  }
}

export default App
