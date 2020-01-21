import React, { forwardRef } from 'react'

const Projects = forwardRef((props, ref) => {
  return (
    <div className="projects" ref={ref}>
      <h1>Projects</h1>
    </div>
  )
})

export default Projects
