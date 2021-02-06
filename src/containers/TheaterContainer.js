import React, { Component } from 'react'
import TheaterForm from './TheaterForm.js';
import Theater from '../components/Theater.js'
import { connect } from 'react-redux';
import { getTheaters } from '../actions/theaters.js';


class TheaterContainer extends Component {
    componentDidMount() {
        this.props.getTheaters()
    }

    render() {
        console.log("Rendering")
        const theatersLis = this.props.theaters.map((th) => <Theater theater={th}/> )

        return (
            <div className="App">
                <h2>Add Theater</h2>
                <TheaterForm/>
                <hr/>
                <h2>Theater Productions</h2>
                    <ul>
                        {this.props.loading ? <h3>Loading...</h3> : theatersLis}
                    </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("I am state", state)
    return {
        theaters: state.theaterReducer.theaters,
        loading: state.theaterReducer.loading,
    }
}

export default connect(mapStateToProps, {getTheaters})(TheaterContainer)