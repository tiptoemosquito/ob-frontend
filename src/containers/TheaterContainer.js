import React, { Component } from 'react'
import TheaterForm from './TheaterForm.js';
import { connect } from 'react-redux';
import { getTheaters } from '../actions/theaters';

class TheaterContainer extends Component {
    componentDidMount() {
        this.props.getTheaters()
    }

    render() {
        console.log("Rendering")
        const theatersLis = this.props.theaters.map((th) => <li key={th.id}>{th.name}</li>)

        return (
            <div className="App">
                <h2>Add Theater</h2>
                <TheaterForm/>
                <hr/>
                <h2>Theater Productions</h2>
                    <li>
                        {this.props.loading ? <h3>Loading...</h3> : theatersLis}
                    </li>
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