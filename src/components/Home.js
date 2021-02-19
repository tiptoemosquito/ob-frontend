import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getProductions } from '../actions/productions'
import { getTheaters } from '../actions/theaters'

class Home extends Component {
    componentDidMount() {
        this.props.getProductions()
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



export default connect(null, {getTheaters, getProductions})(Home);