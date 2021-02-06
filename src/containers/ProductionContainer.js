import React, { Component } from 'react'
import ProductionForm from './ProductionForm.js';
import { connect } from 'react-redux';
import { getProductions } from '../actions/productions.js';
import { Link } from 'react-router-dom'

class ProductionContainer extends Component {
    componentDidMount() {
        this.props.getProductions()
    }
    
    render() {
        console.log("Rendering")
        const prodctLis = this.props.productions.map((pr) => <li key={pr.id}>{pr.title}</li>)
    
        return (
            <div className="App">
            <h2>Create Production</h2>
            <ProductionForm />
            <hr/>
            <h2>Productions</h2>
                <ul>
                    {this.props.loading ? <h3>Loading. . .</h3> : prodctLis}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log("I am state", state)
  return {
    productions: state.productionReducer.productions,
    loading: state.productionReducer.loading,
  }
}

export default connect(mapStateToProps, {getProductions})(ProductionContainer);