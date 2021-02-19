import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductions } from '../actions/productions';
import Production from '../components/Production';

class ProductionContainer extends Component {
    componentDidMount() {
        console.log("Productions Mounted")
        this.props.getProductions()
    }
    
    render() {
        console.log("Rendering")
        const productLis = this.props.productions.map((pr) => <Production production={pr} /> )
        
        return (
            <div className="App">
            <h2>Productions</h2>
            <hr/>
                <ul>
                    {this.props.loading ? <h3>Loading. . .</h3> : productLis}
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