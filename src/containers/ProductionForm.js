import React, { Component } from 'react'
import { addTheaterProduction } from '../actions/theaters.js';
import { connect } from 'react-redux';


class ProductionForm extends Component {
    state = {
        production: {
            title: "",
            cast: "",
            description: "",
            classic: true,
        }
    }

    handleOnChange = (event) => {
        this.setState({...this.state,
            production: {...this.state.production,
                [event.target.title]: event.target.value
            }
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const production = {...this.state.production}
        console.log(production)
        this.props.addProduction(production)
        this.setState({
            production: {
                title: "",
                cast: "",
                description: "",
                classic: true,
            },
            loading: false
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                Title: <input
                type="text"
                name="title"
                value={this.state.production.title}
                onChange={this.handleOnChange}
                />
                <br/>
                Cast: <input
                type="text"
                name="cast"
                value={this.state.production.cast}
                onChange={this.handleOnChange}
                />
                <br/>
                Description: <input
                type="text"
                name="description"
                value={this.state.production.description}
                onChange={this.handleOnChange}
                />
                <br/>
                Classic?: <input
                type="checkbox"
                name="classic"
                value={this.state.production.classic}
                onChange={this.handleOnChange}
                />
                <br/>
                <button type="submit">Add Production</button>
            </form>
        )
    }
}

export default connect(null, {addTheaterProduction})(ProductionForm);
