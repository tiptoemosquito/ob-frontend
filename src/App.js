import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import TheaterContainer from './containers/TheaterContainer.js';
import TheaterShow from './containers/TheaterShow.js';
import ProductionContainer from './containers/ProductionContainer.js';
import ProductionShow from './containers/ProductionShow.js';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';

class App extends Component {

  render() {
    console.log("Rendering")

    return (
      <Router>
        <NavBar />
        <div className="conatiner">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/theaters" component={TheaterContainer}/>
            <Route exact path="/theaters/:id" component={TheaterShow} />
            <Route exact path="/productions" component={ProductionContainer} />
            <Route exact path="/productions/:id" component={ProductionShow} />
        </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
