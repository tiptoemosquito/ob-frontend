import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProductions } from '../actions/productions.js';


class ProductionContainer extends Component {
    componentDidMount() {
        this.props.getProductions()
    }
    
    render() {
        console.log("Rendering")
        const productLis = this.props.productions.map((pr) => <li key={pr.id}>{pr.title}</li>)
        
        return (
            <div className="App">
            <h2>Productions</h2>
            <hr/>
    
                <li>
                    {this.props.loading ? <h3>Loading. . .</h3> : productLis}
                </li>
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