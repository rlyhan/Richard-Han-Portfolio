import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import bodymovin from 'lottie-web'

import React, { Component } from 'react'

import Home from './Home'
import About from './About'
import { FeaturedProjects, AllProjects } from './Projects'
import Contact from './Contact'

gsap.registerPlugin(ScrollToPlugin)

const DESKTOP_WIDTH = 1280
const TABLET_WIDTH = 650

class App extends Component {
  constructor() {
    super()
    this.ref = []
    this.currentPage = null
    this.state = {
      currentProject: null,
      allProjectsHidden: true
    }
  }

  componentDidMount() {
    this.navMenu = document.querySelector('.nav-menu')
    this.container = document.querySelector('.App .pages-wrap')

    this.projectListFull = document.querySelector('.project-list-full')
    gsap.set(this.projectListFull, { yPercent: -100 })

    this.homePage = this.container.querySelector('.home')
    this.aboutPage = this.container.querySelector('.about')
    this.projectsPage = this.container.querySelector('.projects')
    this.contactPage = this.container.querySelector('.contact')
    this.pages = [this.homePage, this.aboutPage,
                  this.projectsPage, this.contactPage]

    this.currentPageIdx = 0
    this.currentPage = this.pages[this.currentPageIdx]

    this.containerPosition = this.container.getBoundingClientRect().left
    this.containerTranslateAmount = 0

    this.decoration = this.aboutPage.querySelector('.decorative')
    this.decorationOriginalPosition = this.decoration.getBoundingClientRect().left

    this.scrollEndBreakpoint = this.pages[
      this.pages.length-1].getBoundingClientRect().left * -1


    const pinpointAnimation = bodymovin.loadAnimation({
      container: document.getElementById('pinpoint-animation'),
      path: 'animations/45564-pin-point.json',
      renderer: 'svg',
      loop: true, // optional
      autoplay: true, // optional
      name: 'Pinpoint', // optional
    })

    const setPage = entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.setPage(entry.target)
          if (this.container.clientWidth >= DESKTOP_WIDTH) {
            gsap.to(this.decoration, {
              x: this.currentPage == this.aboutPage ? 0 : this.decorationOriginalPosition,
              ease: 'out',
              duration: 2
            })
          }
        }
      })
    }
    const currentPageObserver = new IntersectionObserver(setPage, {
      root: this.container.clientWidth >= DESKTOP_WIDTH ? document.body : null,
      threshold: this.container.clientWidth >= DESKTOP_WIDTH ? 0.2 : 0.1
    })
    this.pages.forEach(page => {
      currentPageObserver.observe(page)
    })

    window.addEventListener("resize", e => {
      // uncomment this before pushing live
      window.location.reload();
    })

    window.addEventListener("mousemove", e => {
      if (this.container.clientWidth >= DESKTOP_WIDTH) {
        const mouseX = e.clientX
        const mouseY = e.clientY

        const screenCenterX = document.querySelector('.home').offsetWidth / 2
        const screenCenterY = document.querySelector('.home').offsetHeight / 2
        const mouseXToCenterDiff = screenCenterX - mouseX
        const mouseYToCenterDiff = screenCenterY - mouseY

        const titleElement = document.querySelector('.home .title-wrap')
        const title = titleElement.querySelector('.title')
        const subtitle = titleElement.querySelector('.subtitle')

        title.style.transform = `translate(${mouseXToCenterDiff * 0.01}px)`
        subtitle.style.transform = `translate(${mouseXToCenterDiff * -0.01}px)`

        const circles = document.querySelectorAll('.home > .page-content .circle')
        circles.forEach(circle => {
          const circleXOffset = `calc(-50% - ${mouseXToCenterDiff * -0.01}px)`
          const circleYOffset = `calc(-50% - ${mouseYToCenterDiff * -0.01}px)`
          circle.style.transform = `translate(${circleXOffset}, ${circleYOffset})`
        })
      }
    })

    this.container.addEventListener("wheel", e => {
      if (this.container.clientWidth >= DESKTOP_WIDTH) {
        e.preventDefault();

        let scrollAmount = e.deltaY
        this.setContainerPosition(scrollAmount)
      }
    })
  }

  setContainerPosition = scrollAmount => {
    if (this.containerPosition <= 0 && this.containerTranslateAmount <= 0) {
      this.containerTranslateAmount -= scrollAmount
      if (this.containerTranslateAmount > 0) this.containerTranslateAmount = 0
      if (this.containerTranslateAmount < this.scrollEndBreakpoint) {
        this.containerTranslateAmount = this.scrollEndBreakpoint
      }

      gsap.to(this.container, {
        x: this.containerTranslateAmount
      })
    }
  }

  setPage = newPage => {
    this.currentPage = newPage
    const pageIdx = this.pages.indexOf(this.currentPage)
    this.setNavLink(pageIdx)
  }

  setPageByIndex = pageIdx => {
    this.setPage(this.pages[pageIdx])
    if (this.container.clientWidth < DESKTOP_WIDTH) {
      gsap.set(window, {
        scrollTo: this.currentPage
      })
    } else {
      this.setContainerPosition(this.currentPage.getBoundingClientRect().left)
    }
  }

  setNavLink = pageIdx => {
    const navLinks = Array.from(this.navMenu.querySelectorAll('.page-titles > li'))
    const oldCurrent = navLinks.find(navLink => navLink.classList.contains('current'))
    if (oldCurrent) oldCurrent.classList.remove('current')
    navLinks[pageIdx].classList.add('current')
  }

  toggleAllProjects = () => {
    if (this.state.allProjectsHidden) {
      gsap.to(this.projectListFull, {
        yPercent: 0,
        duration: 0.5,
        ease: "expo"
      })
      this.setState({
        allProjectsHidden: false
      })
    } else {
      gsap.to(this.projectListFull, {
        yPercent: -100,
        duration: 0.5,
        ease: "expo"
      })
      this.setState({
        allProjectsHidden: true
      })
    }
  }

  toggleProject = newProjectId => {
    let prevProject = this.state.currentProject
    let newProject = this.projectListFull.querySelector(
      `.project[data-id="${newProjectId}"]`)
    if (!newProject) return
    if (prevProject) {
      gsap.timeline().to(prevProject.querySelector('.project-wrap'), {
        duration: 0.5,
        height: 0
      })
      if (!(newProject === prevProject)) {
        gsap.timeline().to(newProject.querySelector('.project-wrap'), {
          duration: 0.5,
          height: 'auto'
        })
      }
    } else {
      gsap.timeline().to(newProject.querySelector('.project-wrap'), {
        duration: 0.5,
        height: 'auto'
      }).to(this.projectListFull, {
        duration: 0.5,
        scrollTo: newProject
      })
    }

    this.setState({
      currentProject: newProject === prevProject ? null : newProject
    })
  }

  render() {
    return (
      <div className="App">
        <div className="nav-menu nav-to-bottom">
          <input type="checkbox" id="toggle"/>
          <div id="burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className="page-titles">
            <li>HOME</li>
            <li onClick={() => this.setPageByIndex(1)}>ABOUT</li>
            <li onClick={() => this.setPageByIndex(2)}>WORK</li>
            <li onClick={() => this.setPageByIndex(3)}>GET IN TOUCH</li>
          </ul>
        </div>
        <AllProjects ref="allProjects" currentProject={this.state.currentProject}
                                       toggleProject={this.toggleProject}
                                       toggleAllProjects={this.toggleAllProjects} />
        <div className="pages-wrap">
          <Home ref="home" />
          <About ref="about" />
          <FeaturedProjects ref="projects" currentProject={this.state.currentProject}
                            toggleProject={this.toggleProject}
                            toggleAllProjects={this.toggleAllProjects} />
          <Contact ref="contact" />
        </div>
      </div>
    )
  }
}

export default App
