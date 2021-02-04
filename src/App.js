import React, {Component} from 'react'
import './App.css';
import { connect } from 'react-redux'
import {getTheaters} from './actions/theaters'

class App extends Component {

  render(){
    const theatersLis = this.props.theaters.map((th) => <li key={th.id}>(td.name) - {th.classic ? "Classic" : "Not a Classic"}</li>)

    return (
      <div className="App">
        <h1>Add Theater</h1>
        <hr/>
        <h1>Your Theaters</h1>
        <ul>
          {this.props.loading ? <h3>Loading...</h3> : theatersLis}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("I am state", state)
  return {
    theaters: state.theaterReducer.theaters,
    loading: state.theaterReducer.loading
  }
}

export default connect(mapStateToProps, {getTheaters})(App);
