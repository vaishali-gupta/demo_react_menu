import React, { Component } from 'react';
import './App.css';
import { scaleRotate as Menu } from 'react-burger-menu';
class App extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  render() {
  return (
    <div id="outer-container">
      <Menu  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item" href="">Settings</a>
       
        </Menu>

        <main id="page-wrap">
            <h1>
              <a href="https://github.com/negomi/react-burger-menu">react-burger-menu</a>
            </h1>
            <a className="side-button left active">Left</a>
            <a className="side-button right">Right</a>
            <h2 className="description">An off-canvas sidebar React component with a collection of effects and styles using CSS transitions and SVG path animations.</h2>
            
          </main>
      </div>
      
  );
  }
}


export default App;
