import { gsap } from "gsap";

import React, { Component, forwardRef } from 'react'

import projects from '../content/projects.json'

class FeaturedProjects extends Component {
  constructor(props) {
    super(props)
    // when this page is visited, scale each featured project
    // from 0 to 1, one by one in random order with a bounce effect
    // (ie. briefly scaling to 1.3 or so before going to 1)
  }

  componentDidMount() {
    const viewMore = this.refs.viewMore
    viewMore.addEventListener("click", e => {
      this.props.toggleAllProjects()
    })

    const projects = this.refs.projectList.querySelectorAll('.project')
    projects.forEach(project => {
      project.querySelector('.project-wrap').addEventListener("click", e => {
        this.props.toggleAllProjects()
        this.props.toggleProject(project.dataset.id)
      })
      project.querySelector('.project-wrap').addEventListener("mouseenter", e => {
        gsap.to(project, {
          duration: 0.5,
          scale: 1.25,
        })
        gsap.to(project.querySelector('.image'), {
          duration: 0.5,
          opacity: 1
        })
      })
      project.querySelector('.project-wrap').addEventListener("mouseleave", e => {
        gsap.to(project, {
          duration: 0.5,
          scale: 1
        })
        gsap.to(project.querySelector('.image'), {
          duration: 0.5,
          opacity: 0.7
        })
      })
    })
  }

  render() {
    return (
      <div className="projects">
        <div className="page-content">
          <div className="project-list" ref="projectList">
            {
              projects.map((project, index) => {
                if (project["featured"]) {
                  return (
                    <div className="project" key={index} data-id={project["id"]}>
                      <div className="project-wrap">
                        <div className="image">
                          <img src={require(`../images/projects/${project["file_name"]}`)} alt="project-thumb"/>
                        </div>
                        <div className="project-title">
                          <p>{ project["name"] }</p>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            }
            <div className="toggle-all-projects" ref="viewMore">
              View<br/>All
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class AllProjects extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const hide = this.refs.hideAll
    hide.addEventListener("click", e => {
      if (this.props.currentProject) {
        this.props.toggleProject(this.props.currentProject.dataset.id)
      }
      this.props.toggleAllProjects()
    })

    const projects = this.refs.projectList.querySelectorAll('.project')
    projects.forEach(project => {
      project.querySelector('.project-title').addEventListener("click", e => {
        this.props.toggleProject(project.dataset.id)
      })
    })
  }

  render() {
    const sortedClientProjects = Array.prototype.slice.call(
        projects.sort((a, b) => {
          return a["name"].localeCompare(b["name"])
        })
      ).filter(project => project["client"])

    const sortedBeginnerProjects = Array.prototype.slice.call(
        projects.sort((a, b) => {
          return a["name"].localeCompare(b["name"])
        })
      ).filter(project => !project["client"])

    return (
      <div className="project-list-full">
        <div className="project-list-wrap" ref="projectList">
          <h4 className="project-section">Client work</h4>
          {
            sortedClientProjects.map((project, index) => {
              return (
                <div className="project" key={index} data-id={project["id"]}>
                  <div className="project-title">
                    <p>{ project["name"] }</p>
                  </div>
                  <div className="project-wrap">
                    <div className="image">
                      <img src={require(`../images/projects/${project["file_name"]}`)} alt="project-thumb"/>
                    </div>
                    <div className="project-description">
                      <p>{ project["description"] }</p>
                    </div>
                    <div className="links">
                      <span><a href={ project["url"] } target="_blank">VIEW SITE</a></span>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <h4 className="project-section">Personal work</h4>
          {
            sortedBeginnerProjects.map((project, index) => {
              return (
                <div className="project" key={index} data-id={project["id"]}>
                  <div className="project-title">
                    <p>{ project["name"] }</p>
                  </div>
                  <div className="project-wrap">
                    <div className="image">
                      <img src={require(`../images/projects/${project["file_name"]}`)} alt="project-thumb"/>
                    </div>
                    <div className="project-description">
                      <p>{ project["description"] }</p>
                    </div>
                    <div className="links">
                      <span><a href={ project["url"] } target="_blank">VIEW SITE</a></span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="toggle-all-projects sticky" ref="hideAll">
          Hide
        </div>
      </div>
    )
  }
}


export { FeaturedProjects, AllProjects }
