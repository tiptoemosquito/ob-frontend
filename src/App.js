import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Off Broadway</h1>
        <hr/>
        <h1>Add Theater</h1>
      </div>
    );
  }
}

export default connect()(App);
