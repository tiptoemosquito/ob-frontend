import React, { Component } from 'react'
import { addTheaterProduction } from '../actions/theaters';
import { connect } from 'react-redux';

class ProductionForm extends Component {
    state = {
        production: {
            title: "",
            cast: "",
            description: "",
            classic: true
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            production: {
                ...this.state.production,
                [e.target.name]: e.target.value 
            }
        })
        console.log(e.target.value)
    }

    // handleOnChange = (event) => {
    //     this.setState({...this.state,
    //         production: {...this.state.production,
    //             [event.target.title]: event.target.value
    //         }
    //     })
    // }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const production = {...this.state.production,
        theater_id: this.props.theater_id
        }
        console.log(production)
        this.props.addTheaterProduction(production)
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
                onChange={this.handleChange}
                />
                <br/>
                Cast: <input
                type="text"
                name="cast"
                value={this.state.production.cast}
                onChange={this.handleChange}
                />
                <br/>
                Description: <input
                type="text"
                name="description"
                value={this.state.production.description}
                onChange={this.handleChange}
                />
                <br/>
                Classic?: <input
                type="checkbox"
                name="classic"
                value={this.state.production.classic}
                onChange={this.handleChange}
                />
                <br/>
                <button type="submit">Add Production</button>
            </form>
        )
    }
}

export default connect(null, {addTheaterProduction})(ProductionForm);
