import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import TheaterContainer from './containers/TheaterContainer';
import ProductionContainer from './containers/ProductionContainer';
import Home from './containers/Home';
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    console.log("Rendering")

    return (
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/theaters" component={TheaterContainer}/>
            <Route exact path="/productions" component={ProductionContainer} />
        </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
