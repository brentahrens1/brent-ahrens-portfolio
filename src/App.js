import React, { Component } from 'react';
import './App.css'

import NavBar from '../src/NavBar/NavBar'
import MainInfo from '../src/MainInfo/MainInfo'
import ProjectContainer from '../src/ProjectContainer/ProjectContainer'
import Experience from '../src/Experience/Experience'
import Education from '../src/Education/Education'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div id="home">
          <MainInfo/>
        </div>
        <div id="project">
          <ProjectContainer/>
        </div>
        <hr/>
        <div id="experience">
          <Experience/>
        </div>
        <div id="education">
          <Education/>
        </div>
      </div>
    );
  }
}

export default App;
