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
           
            <h2 className="description">An off-canvas sidebar React component with a collection of effects and styles using CSS transitions and SVG path animations.</h2>
            <p>Lorem ipsum dolor sit amet, temporibus dissentiet sit te, 
              vim wisi adipisci disputando cu. An sed dicat feugiat. 
              Ex diam maluisset sententiae sed, mei dico facer philosophia ne. 
              Eu clita facilisi eum, sumo duis signiferumque eam et.</p>

            <p>Eum ad nobis verterem consetetur. Ea quo aperiam lucilius, vix et diam interpretaris. Nibh 
              sanctus ornatus an nam, tota aliquip legimus vix ad, sed ut esse epicuri quaestio. Brute
               prodesset nam at, te ludus accommodare duo, ei prima dolorum definitionem sea. Elitr 
               munere voluptatibus in sed, saepe fierent no usu, eu quis modo lobortis nam.
                An usu docendi nostrum.</p>

            <hr></hr>
            <p>Lorem ipsum dolor sit amet, temporibus dissentiet sit te, 
              vim wisi adipisci disputando cu. An sed dicat feugiat. 
              Ex diam maluisset sententiae sed, mei dico facer philosophia ne. 
              Eu clita facilisi eum, sumo duis signiferumque eam et.</p>

            <p>Eum ad nobis verterem consetetur. Ea quo aperiam lucilius, vix et diam interpretaris. Nibh 
              sanctus ornatus an nam, tota aliquip legimus vix ad, sed ut esse epicuri quaestio. Brute
               prodesset nam at, te ludus accommodare duo, ei prima dolorum definitionem sea. Elitr 
               munere voluptatibus in sed, saepe fierent no usu, eu quis modo lobortis nam.
                An usu docendi nostrum.</p>

                <hr></hr>
            <p>Lorem ipsum dolor sit amet, temporibus dissentiet sit te, 
              vim wisi adipisci disputando cu. An sed dicat feugiat. 
              Ex diam maluisset sententiae sed, mei dico facer philosophia ne. 
              Eu clita facilisi eum, sumo duis signiferumque eam et.</p>
              <p>Eum ad nobis verterem consetetur. Ea quo aperiam lucilius, vix et diam interpretaris. Nibh 
              sanctus ornatus an nam, tota aliquip legimus vix ad, sed ut esse epicuri quaestio. Brute
               prodesset nam at, te ludus accommodare duo, ei prima dolorum definitionem sea. Elitr 
               munere voluptatibus in sed, saepe fierent no usu, eu quis modo lobortis nam.
                An usu docendi nostrum.</p>

                <hr></hr>
            <p>Lorem ipsum dolor sit amet, temporibus dissentiet sit te, 
              vim wisi adipisci disputando cu. An sed dicat feugiat. 
              Ex diam maluisset sententiae sed, mei dico facer philosophia ne. 
              Eu clita facilisi eum, sumo duis signiferumque eam et.</p>
              <p>Eum ad nobis verterem consetetur. Ea quo aperiam lucilius, vix et diam interpretaris. Nibh 
              sanctus ornatus an nam, tota aliquip legimus vix ad, sed ut esse epicuri quaestio. Brute
               prodesset nam at, te ludus accommodare duo, ei prima dolorum definitionem sea. Elitr 
               munere voluptatibus in sed, saepe fierent no usu, eu quis modo lobortis nam.
                An usu docendi nostrum.</p>
          </main>
      </div>
      
  );
  }
}


export default App;
