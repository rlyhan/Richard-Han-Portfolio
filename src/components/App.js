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
  }

  render() {
    return (
      <div className="App">
        <div className="nav-dots">
          <div onClick={() => this.ref[0].scrollIntoView({ behavior: 'smooth' })}></div>
          <div onClick={() => this.ref[1].scrollIntoView({ behavior: 'smooth' })}></div>
          <div onClick={() => this.ref[2].scrollIntoView({ behavior: 'smooth' })}></div>
          <div onClick={() => this.ref[3].scrollIntoView({ behavior: 'smooth' })}></div>
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
