import React, { Component } from 'react'
import {connect} from 'react-redux'
import mapDispatchToProps from 'react-redux/lib/connect/mapDispatchToProps'
import { getProductions } from '../actions/productions.js'
import { getTheaters } from '../actions/theaters.js'

class Home extends Component {
    componentDidMount() {
        this.props.getProductions(),
        this.props.getTheaters()
    }

    render() {
        return (
            <div>
                <h1>Welcome to Off Broadway</h1>
                <h3>Your Collection of Broadway Productions</h3>
            </div>
        )
    }
}

mapDispatchToProps = (dispatch) => {
   return {
    getTheaters: () =>  dispatch(getTheaters()),
    getProductions: () => dispatch(getProductions())
   }
}

export default connect(null, mapDispatchToProps)(Home);