import React, { Component } from 'react'
import { connect } from 'react-redux';

class ProductionShow extends Component {
    render() {
        const production = this.props.productions.find((p) => `${p.id}` === this.props.match.params.id )
        
        return (
            <div>
                <br></br>
                <hr/>
                <h2>Title: {production.title}</h2>
                <h3>Cast: {production.cast}</h3>
                <h3>Description: {production.description}</h3>
                <h3>Classic: {production.classic}?</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("I am state", state)
    return {
      productions: state.productionReducer.productions
    }
  }

export default connect(mapStateToProps)(ProductionShow);