import React, { Component } from 'react'
import { connect } from 'react-redux';
import Production from '../components/Production';
import ProductionForm from './ProductionForm';

class TheaterShow extends Component {
    render() {
        console.log("Stuff Happening")
        const theater = this.props.theaters.find((th) => `${th.id}` === this.props.match.params.id)
        // const productionLis = theater.productions.map((p) => <Production production={p}/> )
        const productions = this.props.productions.filter(p => `${p.theater_id}` === theater.id)
        const productionLis = productions.map((p) => <Production production={p}/> )
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
      theaters: state.theaterReducer.theaters,
      productions: state.productionReducer.productions
    }
  }

export default connect(mapStateToProps)(TheaterShow);