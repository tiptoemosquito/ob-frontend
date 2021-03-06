import React, { Component } from 'react';
import { addTheater } from '../actions/theaters';
import { connect } from 'react-redux';

class TheaterForm extends Component {
    state = {
        theater: {
            name: ""
        }
    }

    handleOnChange = (event) => {
        this.setState({...this.state,
            theater: {...this.state.theater,
                name: event.target.value
            }
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const theater = {...this.state.theater}
        console.log(theater)
        this.props.addTheater(theater)
        this.setState({
            theater: {
                name: "",
            },
            loading: false
        })
    }

    render() {
        return (
        <form onSubmit={this.handleOnSubmit}> 
            <input 
            type="text"
            name="theater"
            value={this.state.name}
            onChange={this.handleOnChange}/>
            <button type="submit">Add Theater</button>
        </form>
        )
    }
}

export default connect(null, { addTheater })(TheaterForm)