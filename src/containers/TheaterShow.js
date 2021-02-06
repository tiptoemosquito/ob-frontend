import React, { Component } from 'react'
import { connect } from 'react-redux';
import Production from '../components/Production';
import ProductionForm from './ProductionForm';

class TheaterShow extends Component {
    render() {
        console.log("Hey")
        const theater = this.props.theaters.find((th) => `${th.id}` === this.props.match.params.id )
        const productionLis = theater.productions.map((p) => <Production production={p}/> )
        return (
            <div>
                <h1> {theater.name} Productions </h1>
                <h2>Add Production</h2>
                <ProductionForm theater_id={theater.id}/>
                <li>
                    {productionLis}
                </li>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("I am state", state)
    return {
      theaters: state.theaterReducer.theaters
    }
  }

export default connect(mapStateToProps)(TheaterShow);